import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationsRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it('should be able to add a new specification into a car', async () => {
    const specifications = ['321', '123'];

    const car = await carsRepositoryInMemory.create({
      name: 'Chevrolet Onix 1.0',
      brand: 'Chevrolet',
      fine_amount: 50,
      license_plate: 'ABC-1234',
      category_id: '123',
      daily_rate: 100,
      description: 'A hatchback car',
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: 'test',
      name: 'test',
    });

    const specifications_id = [specification.id];

    const { id: car_id } = car;

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id,
      specifications_id,
    });

    expect(specificationsCars).toHaveProperty('specifications');
    expect(specificationsCars.specifications.length).toBe(1);
  });

  it('should not be able to add a new specification into a car that dont exists', () => {
    expect(async () => {
      const car_id = '1234';
      const specifications = ['321', '123'];

      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id: specifications,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

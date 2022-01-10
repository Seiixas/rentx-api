import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

beforeEach(() => {
  carsRepository = new CarsRepositoryInMemory();
  createCarUseCase = new CreateCarUseCase(carsRepository);
});

describe('Create Car', () => {
  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car',
      description: 'Description car',
      daily_rate: 200,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'Category',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able no create a new car if its license plate already exists', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car 1',
        description: 'Description car',
        daily_rate: 200,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'Category',
      });

      await createCarUseCase.execute({
        name: 'Car 2',
        description: 'Description car',
        daily_rate: 200,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'Category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a new car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Availabe',
      description: 'Description car',
      daily_rate: 200,
      license_plate: 'ABC-5555',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'Category',
    });

    expect(car.available).toBe(true);
  });
});

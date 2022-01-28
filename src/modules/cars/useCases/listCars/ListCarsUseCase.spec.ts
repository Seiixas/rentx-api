import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListCarsUseCase } from './ListCarsUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarsUseCase: ListCarsUseCase;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car Name',
      brand: 'Car Brand',
      description: `Car's description`,
      license_plate: 'ABC-1234',
      daily_rate: 100.0,
      fine_amount: 50,
      category_id: 'category_id',
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual(car);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car Name',
      brand: 'Car Brand_New',
      description: `Car's description`,
      license_plate: 'ABC-1234',
      daily_rate: 100.0,
      fine_amount: 50,
      category_id: 'category_id',
    });

    const cars = await listCarsUseCase.execute({
      brand: 'Car Brand_New',
    });

    console.log(cars);
  });
});

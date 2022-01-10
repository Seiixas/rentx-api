import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
    brand,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      brand,
    });

    this.cars.push(car);
  }
}

export { CarsRepositoryInMemory };

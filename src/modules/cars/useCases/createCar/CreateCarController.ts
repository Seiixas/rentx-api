import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from './CreateCarUseCase';

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      brand,
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      description,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      brand,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController };

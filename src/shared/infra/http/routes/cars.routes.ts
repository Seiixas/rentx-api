import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { Router } from 'express';

import { ensureAdministrator } from '../middlewares/ensureAdministrator';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdministrator,
  createCarController.handle
);

export { carsRoutes };

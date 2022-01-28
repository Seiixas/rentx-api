import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { Router } from 'express';

import { ensureAdministrator } from '../middlewares/ensureAdministrator';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdministrator,
  createSpecificationController.handle
);

export { specificationsRoutes };

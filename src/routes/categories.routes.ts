import { Router } from 'express';
// import { v4: uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response.status(201).send();
});

export { categoriesRoutes };

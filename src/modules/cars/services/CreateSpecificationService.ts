import { SpecificationRepository } from '../repositories/SpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: SpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('This specification already exists');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };

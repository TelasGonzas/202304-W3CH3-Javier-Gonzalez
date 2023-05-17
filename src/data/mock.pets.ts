import { Pets } from '../models/pets';

export const getMockPets = (): Pets[] => [
  new Pets('Cecina', 'Gato común', 'Marta'),
  new Pets('Pepita', 'Gato hidráulico', 'Javi'),
];

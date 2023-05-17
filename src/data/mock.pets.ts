import { Pets } from '../models/pets';

export const getMockPets = (): Pets[] => [
  new Pets('Simba', 'Orange Tabby', 'Marta'),
  new Pets('Pepita', 'Gato hidráulico', 'Javi'),

  new Pets('AirPepi', 'Gato GOAT', 'MJ23'),
];

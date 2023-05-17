/* eslint-disable no-unused-vars */
export type PetStructure = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class Pets implements PetStructure {
  static generateID() {
    return Math.trunc(Math.random() * 100).toString();
  }

  id: string;
  isAdopted: boolean;
  constructor(public name: string, public breed: string, public owner: string) {
    this.id = Pets.generateID();
    this.isAdopted = false;
  }
}

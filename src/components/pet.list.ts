/* eslint-disable no-unused-vars */
import { getMockPets } from '../data/mock.pets';
import { Pets } from '../models/pets';
import { Component } from './component';
import './pet.list.css';

export class PetsList extends Component {
  pets: Pets[];
  constructor(selector: string) {
    super(selector);
    this.pets = getMockPets();
    this.render();
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
      .querySelectorAll('.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
    return element;
  }

  handleDelete(event: Event) {
    const element = event.target as HTMLSpanElement;
    this.pets = this.pets.filter((item) => item.id !== element.dataset.id);
    console.log(this.pets);
    this.render();
  }

  createTemplate() {
    const list = this.pets
      .map(
        (item) => `
        <div>
          <li>
            <img src="/${item.name}.jpeg" alt="${item.name} ${item.breed}" >
            <span>${item.isAdopted ? 'checked' : ''}</span>
            <span>${item.id}</span>
            <span>${item.name}</span>
            <span>${item.breed}</span>
            <span class= "button-span">${
              item.owner
            }<i class="button" role="button" data-id=${item.id}>✖️</i></span>
          </li>
          </div>`
      )
      .join('');

    return `<ul>${list}</ul>`;
  }
}

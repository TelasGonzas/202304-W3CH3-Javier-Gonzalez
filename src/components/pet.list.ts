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

  render(): any {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    super.render();
    this.element
      .querySelectorAll('.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
  }

  handleDelete(event: Event): void {
    const element = event.target as HTMLSpanElement;
    this.pets = this.pets.filter((item) => item.id !== element.dataset.id);

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
            <span class= "button-span">${item.owner}
            
            <i onclick="document.getElementById('sound').play();" class="button" role="button" data-id=${
              item.id
            }>Borrar</i></span>
          </li>
          </div>`
      )
      .join('');

    return `<ul>${list}</ul>`;
  }
}

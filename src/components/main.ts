import './main.css';
import { Component } from './component';

import { PetsList } from './pet.list';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <main>
      <h2>Gatetes:</h2>
    </main>
    `;
  }
}

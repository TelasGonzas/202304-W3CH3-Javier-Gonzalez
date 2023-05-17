/* eslint-disable no-new */
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';
import { PetsList } from './components/pet.list';

new Header('#app', 'Gaticos y Monetes');
new Main('#app');
new PetsList('main');
new Footer('#app', 'Ay los Gaticos');

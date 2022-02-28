import { BaseComponent } from '../base-component';
import { Card } from './../card/card';
import './cards-field.scss';

export class CardsField extends BaseComponent {
  private cards: Card[] = [];
  constructor() {
    super('div', ['game-field']);
  }
  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
  }
}

import { CardsField } from './../cards-field/cards-field';
import { Card } from './../card/card';
import { BaseComponent } from './../base-component';

export class Game extends BaseComponent {
  private readonly cardsField = new CardsField();

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    this.cardsField.addCards(cards);
  }
}

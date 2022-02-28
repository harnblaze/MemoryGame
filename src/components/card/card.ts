import { BaseComponent } from './../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  constructor(readonly imageSrc: string) {
    super('div', ['card-container']);

    this.element.innerHTML = `
      div class="card">
        <div class="card__front"
          style="background-image: url('./images/${imageSrc})">
        </div>
        <div class="card__back">Back</div>
      </div>
    `;
  }

  flipToBack() {
    this.element.classList.add(FLIP_CLASS);
  }

  flipToFront() {
    this.element.classList.remove(FLIP_CLASS);
  }
}

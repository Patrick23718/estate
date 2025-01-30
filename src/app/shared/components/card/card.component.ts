import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ICard } from '../../interfaces/ICard';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [MatIconModule],
  providers: [CommonModule],
  templateUrl: './card.component.html',
  standalone: true,
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() data!: ICard;

  private currencyPipe = inject(CurrencyPipe);

  formatPrice(price: number, currency: string): string | null {
    return this.currencyPipe.transform(price, currency, 'symbol-narrow');
  }

}

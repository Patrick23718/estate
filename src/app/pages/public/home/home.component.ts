import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ICard } from '../../../shared/interfaces/ICard';
import { Piece } from '../../../shared/enums/piece';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import {Router} from "@angular/router";
import {MapComponent} from "../../../shared/components/map/map.component";

import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FooterComponent, MapComponent, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  view: string = 'home'
  btn: string = 'Afficher la carte'
  constructor(private router: Router) {}

  goToDetails(id: string): void {
    this.router.navigate(['/estate', id]);
  }

  changeView(): void {
    if (this.view === 'home') {
      this.view = 'map';
      this.btn = 'Afficher la liste';
    }else{
      this.view = 'home';
      this.btn = 'Afficher la carte';
    }
  }

  cards: ICard[] = [
    {
      id: 'ok',
      images: [
        'images/1.png'
      ],
      title: 'Luxury Family Home',
      location: '1800-1818 79th St',
      price: 395,
      pieces: [
        {
          quantity: 4,
          piece: Piece.ROOM
        },
        {
          quantity: 1,
          piece: Piece.ROOM
        },
      ],
      superficie: 400
    },
    {
      id: 'ok1',
      images: ['images/2.png'],
      title: 'Skyper Pool Apartment',
      location: '1020 Bloomingdale Ave',
      price: 280,
      pieces: [
        {
          quantity: 4,
          piece: Piece.ROOM
        },
        {
          quantity: 1,
          piece: Piece.ROOM
        },
      ],
      superficie: 450
    },
    {
      id: 'ok2',
      images: ['images/3.png'],
      title: 'North Dillard Street',
      location: '4330 Bell Shoals Rd',
      price: 250,
      pieces: [
        {
          quantity: 4,
          piece: Piece.ROOM
        },
        {
          quantity: 1,
          piece: Piece.ROOM
        },
      ],
      superficie: 400
    },
    {
      id: 'ok3',
      images: ['images/4.png'],
      title: 'Eaton Garth Penthouse',
      location: '7722 18th Ave, Brooklyn',
      price: 180,
      pieces: [
        {
          quantity: 4,
          piece: Piece.ROOM
        },
        {
          quantity: 1,
          piece: Piece.ROOM
        },
      ],
      superficie: 450
    },
    {
      id: 'ok4',
      images: ['images/5.png'],
      title: 'New Apartment Nice Wiew',
      location: '42 Avenue O, Brooklyn',
      price: 850,
      pieces: [
        {
          quantity: 4,
          piece: Piece.ROOM
        },
        {
          quantity: 1,
          piece: Piece.ROOM
        },
      ],
      superficie: 460
    },
    {
      id: 'ok6',
      images: ['images/6.png'],
      title: 'Diamond Manor Apartment',
      location: '7802 20th Ave, Brooklyn',
      price: 259,
      pieces: [
        {
          quantity: 4,
          piece: Piece.ROOM
        },
        {
          quantity: 1,
          piece: Piece.ROOM
        },
      ],
      superficie: 500
    }
  ]

}

import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ICard } from '../../../shared/interfaces/ICard';
import { Piece } from '../../../shared/enums/piece';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import {Router} from "@angular/router";
import {MapComponent} from "../../../shared/components/map/map.component";

import {MatIconModule} from '@angular/material/icon';
import {HeaderComponent} from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, FooterComponent, MapComponent, MatIconModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  view: string = 'home'
  btn: string = 'Afficher la carte'
  icon: string = 'list_outline'
  constructor(private router: Router) {}

  goToDetails(id: string): void {
    this.router.navigate(['/estate', id]);
  }

  changeView(): void {
    if (this.view === 'home') {
      this.view = 'map';
      this.btn = 'Afficher la liste';
      this.icon = 'list_outline';
    }else{
      this.view = 'home';
      this.btn = 'Afficher la carte';
      this.icon = 'map_outline';
    }
  }

  cards: ICard[] = [
    {
      id: 'ok',
      images: [
        'images/home1.jpg',
        'images/home1_1.jpg',
        'images/home1_2.png',
        'images/home1_3.png',
        'images/home1_4.png',
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
      images: ['images/home3.jpg', 'images/home3_1.jpg', 'images/home3_2.jpg', 'images/home3_3.jpg', "images/home3_4.jpg"],
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
      images: ['images/home2.jpg', "images/home2_1.jpg", "images/home2_2.jpg", "images/home2_3.jpg", "images/home2_4.jpg"],
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
      images: ['images/home4.jpg', 'images/home4_1.jpg', 'images/home4_2.jpg', 'images/home4_3.jpg', 'images/home4_4.jpg'],
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
      images: ['images/5.png', 'images/1.png', 'images/2.png', 'images/3.png', 'images/4.png'],
      title: 'New Apartment Nice Wiew',
      location: '42 Avenue O, Brooklyn',
      price: 450,
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
      images: ['images/6.png', 'images/1.png', 'images/2.png', 'images/3.png', 'images/4.png'],
      title: 'Diamond Manor Apartment',
      location: '7802 20th Ave, Brooklyn',
      price: 500,
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

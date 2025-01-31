import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltip, TooltipComponent} from "@angular/material/tooltip";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
import {HeaderComponent} from "../../../shared/components/header/header.component";
import {ICard} from "../../../shared/interfaces/ICard";
import {Piece} from "../../../shared/enums/piece";

@Component({
  selector: 'app-details',
  imports: [MatButtonModule, MatIconModule, TooltipComponent, MatTooltip, FooterComponent, HeaderComponent],
  templateUrl: './details.component.html',
  standalone: true,
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    id!: string
  features: string[] = [
    'Air Conditioning',
    'Basketball court',
    'Dryer',
    'Elevator',
    'Garage Attached',
    'Gym',
    'Heating',
    'Hot Bath',
    'Media Room',
    'Microwave',
    'Outdoor Shower'
  ];
    ngOnInit(): void {
      //this.id = this.route.snapshot.paramMap.get('id')!;

      // Ou en utilisant un Observable pour surveiller les changements
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id')!;
        this.filterLocation(this.id);

        console.log('ID mis à jour:', this.card);
      });
    }

  protected readonly top = top;

  protected readonly TitleCasePipe = TitleCasePipe;
  protected readonly UpperCasePipe = UpperCasePipe;

  filterLocation(id: string) {
    this.cards.filter(card => {
      card.id === id ? this.card = card: true === true;
    })
  }
  card: ICard | undefined

  cards: ICard[] = [
    {
      id: 'ok',
      images: [
        'images/home1.jpg',
        'images/home1_1.jpg',
        'images/home1_2.png',
        'images/home1_3.png',
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
      images: ['images/home3.jpg', 'images/home3_1.jpg', 'images/home3_2.jpg', 'images/home3_3.jpg'],
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
      images: ['images/home2.jpg', "images/home2_1.jpg", "images/home2_2.jpg", "images/home2_3.jpg"],
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
      images: ['images/home4.jpg', 'images/home4_1.jpg', 'images/home4_2.jpg', 'images/home4_3.jpg'],
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
      images: ['images/6.png', 'images/1.png', 'images/2.png', 'images/3.png', 'images/4.png'],
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

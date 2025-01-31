import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltip, TooltipComponent} from "@angular/material/tooltip";
import {FooterComponent} from "../../../shared/components/footer/footer.component";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
import {HeaderComponent} from "../../../shared/components/header/header.component";

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
        console.log('ID mis à jour:', this.id);
      });
    }

  protected readonly top = top;

  protected readonly TitleCasePipe = TitleCasePipe;
  protected readonly UpperCasePipe = UpperCasePipe;
}

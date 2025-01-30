import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-details',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './details.component.html',
  standalone: true,
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    id!: string
    ngOnInit(): void {
      //this.id = this.route.snapshot.paramMap.get('id')!;

      // Ou en utilisant un Observable pour surveiller les changements
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id')!;
        console.log('ID mis à jour:', this.id);
      });
    }

}

import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
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

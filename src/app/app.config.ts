import { ApplicationConfig, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { Title } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {GoogleMapsModule} from "@angular/google-maps";

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    CurrencyPipe,
    MatIconModule,
    GoogleMapsModule
  ]
};

import { ResolveFn, Routes } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import {DetailsComponent} from "./pages/public/details/details.component";

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Home');

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    {
        path: '',
        title: 'public',
        component: PublicComponent,  // this is the component with the <router-outlet> in the template
        children: [
          {
            path: 'home',  // child route path
            title: resolvedChildATitle,
            component: HomeComponent,  // child route component that the router renders
          },
          {
            path: 'estate/:id',
            title: 'Estate',
            component: DetailsComponent
          },
          {
            path: 'connexion',
            title: 'Connexion',
            component: LoginComponent,  // another child route component that the router renders
          },
        ],
      },
      { path: '**', component: PageNotFoundComponent }
];



import { RegularLayoutComponent } from './layout/regular-layout/regular-layout.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { LoginComponent } from './login/login.component';
import {NgModule} from '@angular/core';

import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [

   // Login layout Only
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },

  // Regular App layout below with Components
  { path: '', component: RegularLayoutComponent,
        children: [
          { path: 'pelicula', component: PeliculaComponent },
          { path: 'pelicula-list', component: PeliculaListComponent },
        ]
  },

];


export const routing = RouterModule.forRoot(appRoutes);

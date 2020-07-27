
/* Firebase Setup */
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { routing } from './app-routing';

/* Spinner */
import { NgxSpinnerModule } from 'ngx-spinner';

/* Components */
import { AppComponent } from './app.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';

/* Service */
import { peliculaService } from './shared/pelicula.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material Design */
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { RegularLayoutComponent } from './layout/regular-layout/regular-layout.component';






@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    PeliculaListComponent,
    MainNavComponent,
    LoginComponent,
    RegularLayoutComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgxSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    peliculaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

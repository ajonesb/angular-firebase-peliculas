import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Router} from '@angular/router';

/* import {MatDialog} from '@angular/material'; */

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {

  }

  login(): void {

      if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['pelicula']);
      console.log('You logged in successfully.');

      } else {
        alert('Invalid credentials');
      }

  }



}

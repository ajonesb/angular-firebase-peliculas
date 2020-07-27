import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  title = 'Angular6FirebaseCrud';

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 3000);
  }


}

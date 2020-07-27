import { peliculaService } from '../shared/pelicula.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class PeliculaComponent implements OnInit {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private peliculaService: peliculaService) {}
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.peliculaService.form.controls;

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if (this.peliculaService.form.valid) {
      if (this.peliculaService.form.get('$key').value == null) {
        this.peliculaService.insertpelicula(this.peliculaService.form.value);
      } else { this.peliculaService.updatepelicula(this.peliculaService.form.value); }
      this.showSuccessMessage = true;
      setTimeout(() => (this.showSuccessMessage = false), 3000);
      this.submitted = false;
      this.peliculaService.form.reset();
    }
  }
}

import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';

@Injectable({
  providedIn: 'root',
})


// tslint:disable-next-line:class-name
export class peliculaService {
  constructor(private firebase: AngularFireDatabase) {}
  peliculaList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    Id: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    datePicker: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    // datePicker: new FormControl(new Date()),
    // serializedDate: new FormControl((new Date()).toISOString()),
    // estado: new FormControl(),

  });

  getpelicula() {
    this.peliculaList = this.firebase.list('peliculas');
    return this.peliculaList.snapshotChanges();
  }

  insertpelicula(pelicula) {
    this.peliculaList.push({
      Id: pelicula.Id,
      fullName: pelicula.fullName,
      datePicker: pelicula.datePicker,
      estado: pelicula.estado,
    });
  }

  populateForm(pelicula) {
    this.form.patchValue(pelicula);
  }

  updatepelicula(pelicula) {
    this.peliculaList.update(pelicula.$key, {
      Id: pelicula.Id,
      fullName: pelicula.fullName,
      datePicker: pelicula.datePicker,
      estado: pelicula.estado,
    });
  }

  deletepelicula($key: string) {
    this.peliculaList.remove($key);
  }

  // formatDate(date: Date): string {
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();

  //   return `${year}-${month}-${day}`;
  // }
}

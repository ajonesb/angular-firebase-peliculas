import { peliculaService } from './../shared/pelicula.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.scss']
})
export class PeliculaListComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private peliculaService: peliculaService) { }
  peliculaArray = [];
  showDeleteMessage: boolean;
  // tslint:disable-next-line:no-inferrable-types
  searchText: string = '';

  ngOnInit() {
    this.peliculaService.getpelicula().subscribe(
      list => {
        this.peliculaArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record?')) {
      this.peliculaService.deletepelicula($key);
      this.showDeleteMessage = true;
      setTimeout(() => this.showDeleteMessage = false, 3000);
    }
  }

  filterCondition(pelicula) {
    return pelicula.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }

}

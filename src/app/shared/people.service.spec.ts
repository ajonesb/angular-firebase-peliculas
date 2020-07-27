import { peliculaService } from './pelicula.service';
import { TestBed } from '@angular/core/testing';



describe('pelicula.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: peliculaService = TestBed.get(peliculaService);
    expect(service).toBeTruthy();
  });
});

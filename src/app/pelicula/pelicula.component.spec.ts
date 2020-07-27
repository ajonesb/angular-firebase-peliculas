import { PeliculaComponent } from './pelicula.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';





describe('PeliculaComponent', () => {
  let component: PeliculaComponent;
  let fixture: ComponentFixture<PeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularLayoutComponent } from './regular-layout.component';

describe('RegularLayoutComponent', () => {
  let component: RegularLayoutComponent;
  let fixture: ComponentFixture<RegularLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

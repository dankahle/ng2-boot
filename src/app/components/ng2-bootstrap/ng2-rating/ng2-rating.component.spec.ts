import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2RatingComponent } from './ng2-rating.component';

describe('Ng2RatingComponent', () => {
  let component: Ng2RatingComponent;
  let fixture: ComponentFixture<Ng2RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2RatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ProgressbarComponent } from './ng2-progressbar.component';

describe('Ng2ProgressbarComponent', () => {
  let component: Ng2ProgressbarComponent;
  let fixture: ComponentFixture<Ng2ProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2ProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

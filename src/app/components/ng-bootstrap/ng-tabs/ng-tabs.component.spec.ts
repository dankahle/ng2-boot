import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTabsComponent } from './ng-tabs.component';

describe('NgTabsComponent', () => {
  let component: NgTabsComponent;
  let fixture: ComponentFixture<NgTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

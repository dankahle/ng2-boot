import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2TabsComponent } from './ng2-tabs.component';

describe('Ng2TabsComponent', () => {
  let component: Ng2TabsComponent;
  let fixture: ComponentFixture<Ng2TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2TabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

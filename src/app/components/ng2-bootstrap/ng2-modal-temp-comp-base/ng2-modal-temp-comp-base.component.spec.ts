/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ng2ModalTempCompBaseComponent } from './ng2-modal-temp-comp-base.component';

describe('Ng2ModalTempCompBaseComponent', () => {
  let component: Ng2ModalTempCompBaseComponent;
  let fixture: ComponentFixture<Ng2ModalTempCompBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2ModalTempCompBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ModalTempCompBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ng2ModalTempComp2Component } from './ng2-modal-temp-comp2.component';

describe('Ng2ModalTempComp2Component', () => {
  let component: Ng2ModalTempComp2Component;
  let fixture: ComponentFixture<Ng2ModalTempComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2ModalTempComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ModalTempComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

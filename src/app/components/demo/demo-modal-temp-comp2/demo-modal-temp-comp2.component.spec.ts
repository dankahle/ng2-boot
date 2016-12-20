/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoModalTempComp2Component } from './demo-modal-temp-comp2.component';

describe('DemoModalTempComp2Component', () => {
  let component: DemoModalTempComp2Component;
  let fixture: ComponentFixture<DemoModalTempComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoModalTempComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModalTempComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

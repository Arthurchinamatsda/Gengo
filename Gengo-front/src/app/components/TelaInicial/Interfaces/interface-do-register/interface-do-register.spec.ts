import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceDoRegister } from './interface-do-register';

describe('InterfaceDoRegister', () => {
  let component: InterfaceDoRegister;
  let fixture: ComponentFixture<InterfaceDoRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceDoRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceDoRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

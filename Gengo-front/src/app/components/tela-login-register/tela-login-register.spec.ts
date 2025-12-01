import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginRegister } from './tela-login-register';

describe('TelaLoginRegister', () => {
  let component: TelaLoginRegister;
  let fixture: ComponentFixture<TelaLoginRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaLoginRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaLoginRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

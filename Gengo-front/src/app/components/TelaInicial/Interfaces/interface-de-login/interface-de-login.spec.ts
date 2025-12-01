import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceDeLogin } from './interface-de-login';

describe('InterfaceDeLogin', () => {
  let component: InterfaceDeLogin;
  let fixture: ComponentFixture<InterfaceDeLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceDeLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceDeLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

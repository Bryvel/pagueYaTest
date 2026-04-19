import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIntentoPago } from './formulario-intento-pago';

describe('FormularioIntentoPago', () => {
  let component: FormularioIntentoPago;
  let fixture: ComponentFixture<FormularioIntentoPago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioIntentoPago],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioIntentoPago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

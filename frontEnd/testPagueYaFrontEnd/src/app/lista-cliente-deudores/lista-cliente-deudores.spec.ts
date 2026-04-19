import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClienteDeudores } from './lista-cliente-deudores';

describe('ListaClienteDeudores', () => {
  let component: ListaClienteDeudores;
  let fixture: ComponentFixture<ListaClienteDeudores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaClienteDeudores],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaClienteDeudores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

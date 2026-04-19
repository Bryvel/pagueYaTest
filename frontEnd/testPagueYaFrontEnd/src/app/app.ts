import { Component, signal } from '@angular/core';
import { FormularioIntentoPago } from './features/formulario-intento-pago/formulario-intento-pago';
import { ListaClienteDeudores } from './features/lista-cliente-deudores/lista-cliente-deudores';

@Component({
  selector: 'app-root',
  imports: [ListaClienteDeudores],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testPagueYaFrontEnd');
}

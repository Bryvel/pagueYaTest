import { Component, signal } from '@angular/core';
import { FormularioIntentoPago } from './features/formulario-intento-pago/formulario-intento-pago';

@Component({
  selector: 'app-root',
  imports: [FormularioIntentoPago],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testPagueYaFrontEnd');
}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IntentoPago } from '../models/intento-pago.model';

@Injectable({ providedIn: 'root' })
export class IntencionPago {
  constructor(private api: ApiService) {}

  create(data: IntentoPago) {
    return this.api.post('intentoPago', data);
  }
}
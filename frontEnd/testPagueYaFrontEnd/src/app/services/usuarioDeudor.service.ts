import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UsuarioDeudor } from '../models/usuario-deudor.model';

@Injectable({ providedIn: 'root' })
export class UsuarioDeudorService {
  constructor(private api: ApiService) {}

    getAll(){
   return this.api.getList('UsuarioDeudor')
  }
}
import { Component,OnInit } from '@angular/core';
import { UsuarioDeudorService } from '../../services/usuarioDeudor.service';
import { MatTableModule } from '@angular/material/table';
import { UsuarioDeudor } from '../../models/usuario-deudor.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { FormularioIntentoPago } from '../formulario-intento-pago/formulario-intento-pago';

@Component({
  selector: 'app-lista-cliente-deudores',
  imports: [MatTableModule,
    CommonModule,  
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule],
  templateUrl: './lista-cliente-deudores.html',
  styleUrl: './lista-cliente-deudores.css',
})
export class ListaClienteDeudores implements OnInit {

   data$!: Observable<UsuarioDeudor[]>;
   loading = true;
   error = '';

    ngOnInit() {
    this.loadData();

  }

 constructor(private service: UsuarioDeudorService,
             private dialog: MatDialog
 ) {

 }


   async loadData() {
    this.data$=this.service.getAll();
  }

   openModal(identificacion?:string, nombre?:string, telefono?:string) {
    this.dialog.open(FormularioIntentoPago, {
      width: '400px',
      data:{
        "identificacion":identificacion,
         "nombre":nombre,
         "telefono":telefono
      }
    });
  }

}

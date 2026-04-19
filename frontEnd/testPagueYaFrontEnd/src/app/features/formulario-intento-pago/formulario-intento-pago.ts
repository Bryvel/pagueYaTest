import { Component,Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IntencionPago } from '../../services/intencionPago.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-formulario-intento-pago',
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule,MatFormFieldModule,MatDatepickerModule,MatInputModule],
  templateUrl: './formulario-intento-pago.html',
  styleUrl: './formulario-intento-pago.css',
})

export class FormularioIntentoPago {


  formularioIntento!: FormGroup;

  @Input({ required: true }) currentItem!: string;
  
  constructor(private formBuilder: FormBuilder,
             private service: IntencionPago,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
    this.formularioIntento = this.formBuilder.group({
      montoPropuesto: ['', Validators.required],
      fecha: ['', Validators.required],
    })

  }

  submitForm() {
    var sendData=this.formularioIntento.value;
    var sendData2={"Nombre":this.data.nombre,"Telefono":this.data.telefono,"Identificacion":this.data.identificacion}
    var sendData3={...sendData,...sendData2}

    this.service.create(sendData3).subscribe({
      next: () => {
        this.formularioIntento.reset();
      },
      error: () => {
      }
    });
    console.log(this.formularioIntento.value)

}}

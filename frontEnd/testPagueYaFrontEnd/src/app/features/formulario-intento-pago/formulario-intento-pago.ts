import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IntencionPago } from '../../services/intencionPago.service';



@Component({
  selector: 'app-formulario-intento-pago',
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule,MatFormFieldModule,MatDatepickerModule,MatInputModule],
  templateUrl: './formulario-intento-pago.html',
  styleUrl: './formulario-intento-pago.css',
})
export class FormularioIntentoPago {


  formularioIntento!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
             private service: IntencionPago
  ) {
    
    this.formularioIntento = this.formBuilder.group({
      montoPropuesto: ['', Validators.required],
      fecha: ['', Validators.required],
    })

  }

  submitForm() {
    var sendData=this.formularioIntento.value;
    var sendData2={"Nombre":"Bryan","Telefono":"12364644","Identificacion":"12132231"}
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

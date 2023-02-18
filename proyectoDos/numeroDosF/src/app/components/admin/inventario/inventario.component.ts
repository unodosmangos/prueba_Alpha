import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent {

  tituloComponente: string = 'Titulo de Inventario'
  inventarioForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.inventarioForm = fb.group({
      item: ['', Validators.required],
      descripcion: ['', Validators.required],
      rutaImg: ['', Validators.required],
    })
  }

  enviarInformacion(){
    console.log(this.inventarioForm)
  }
}


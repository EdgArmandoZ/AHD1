import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {

  resultado='';

  formularioContacto= new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(10)]),
    edad: new FormControl('',[Validators.required, Validators.minLength(1)]),
    DPI: new FormControl('',[Validators.required, Validators.minLength(13)]),
  })
//Local Storage

listaPersonas:{nombre:string, edad:string, DPI:string}[]=[];
constructor(@Inject(DOCUMENT) private document:Document){
  const localStorage= document.defaultView?.localStorage;

  let datos = localStorage?.getItem("Personas");
  if(datos != null){
    let arreglo = JSON.parse(datos);
    if(arreglo != null){
      this.listaPersonas= arreglo;
    }
  }
}

agregarPersona(){
  if(this.formularioContacto.value){
    const nuevaPersona={
      nombre: this.formularioContacto.value.nombre!,
      edad: this.formularioContacto.value.edad!,
      DPI: this.formularioContacto.value.DPI!,
    };
    this.listaPersonas.push(nuevaPersona);
    this.actualizarLocalStorage();
    this.formularioContacto.reset();
    this.resultado="todos los datos validos"
  } else{
    this.resultado= "Hay datos invalidos"
  }
}

borrarPersona1(index: number){
  this.listaPersonas.splice(index, 1);
  this.actualizarLocalStorage();
}

actualizarLocalStorage(){
  localStorage.setItem("personas", JSON.stringify(this.listaPersonas));
}
}

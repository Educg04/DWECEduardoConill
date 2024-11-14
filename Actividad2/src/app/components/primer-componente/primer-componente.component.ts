import { Component } from '@angular/core';
import { Inoticia } from '../../interfaces/inoticia';
import { formatDate } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './primer-componente.component.html',
  styleUrl: './primer-componente.component.css'
})

export class PrimerComponenteComponent {

  arrayNoticias: Inoticia [] = [];

  newNoticia: Inoticia ={
    titulo:"",
    imagen:"",
    cuerpo:"",
    fecha: new Date()
  }

  guardarDatos(): void {
    this.arrayNoticias.push(this.newNoticia);
    this.newNoticia = {
      titulo:"",
      imagen:"",
      cuerpo:"",
      fecha: new Date()
    }
    console.log(this.arrayNoticias);
  }


  cargarDatos(): String {
    let html : string ="";
    this.arrayNoticias.forEach(element =>{
      html += `<p> ${element.titulo} | <img src="${element.imagen}"> | ${element.cuerpo} | ${element.fecha}</p>`
    })
    return html;
  }

}

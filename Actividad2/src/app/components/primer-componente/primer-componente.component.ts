import { Component, getNgModuleById } from '@angular/core';
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

  noticias = document.getElementById('listaNoticias');

  cargarDatos(): void {

    
    this.arrayNoticias.forEach(element =>{
      let titulo = document.createElement('p');
      titulo.innerText = `${element.titulo}`;

      let imagen = document.createElement('img');
      imagen.src = `${element.imagen}`;

      let cuerpo = document.createElement('p');
      cuerpo.innerText = `${element.cuerpo}`;

      let fecha = document.createElement('p');
      fecha.innerText = `${element.fecha}`;

      this.noticias?.appendChild(titulo);
      this.noticias?.appendChild(imagen);
      this.noticias?.appendChild(cuerpo);
      this.noticias?.appendChild(fecha);

      
    })
  }

}

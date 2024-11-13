import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})

export class Componente1Component {
  arrayAficiones: any[] = [];

  newAficion: any = {
    aficion: "",
    nombre: ""
  };

  guardarDatos() : void {
    //Guardo Datos
    this.arrayAficiones.push(this.newAficion);
    this.newAficion = {
      aficion: "",
      nombre: ""
    };
    console.log(this.arrayAficiones);
  }

  cargarDatos() : String {
    let html: String = "";
    this.arrayAficiones.forEach(element=> {
      html += `<p> ${element.aficion} => ${element.nombre} </p>`;
    });

    return html;
  }

}

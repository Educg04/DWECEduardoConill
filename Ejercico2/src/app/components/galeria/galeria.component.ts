import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {


anterior(): void{
}
siguiente(): void {
}

    arrayImagenes : any = [];
    imagenActual : number = 0;

    constructor() {
        this.arrayImagenes = [
          {
            url: 'https://placehold.co/600x400/orange/white',
            title: 'naranja'
          },
          {
            url: 'https://placehold.co/600x400/blue/white',
            title: 'azul'
          },
          {
            url: 'https://placehold.co/600x400/green/white',
            title: 'verde'
          },
          {
            url: 'https://placehold.co/600x400/pink/white',
            title: 'rosa'
          },
          {
            url: 'https://placehold.co/600x400/brown/white',
            title: 'marron'
          },
        ]
    }
}

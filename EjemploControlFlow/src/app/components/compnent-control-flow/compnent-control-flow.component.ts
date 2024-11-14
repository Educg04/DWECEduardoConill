import { Component } from '@angular/core';

@Component({
  selector: 'app-compnent-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './compnent-control-flow.component.html',
  styleUrl: './compnent-control-flow.component.css'
})
export class CompnentControlFlowComponent {
    //edad: number = 19;

    roles: string [] = ["admin", "editor", "suscriptor"];
    rol: string = this.roles [0]

}

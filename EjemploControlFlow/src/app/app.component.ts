import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompnentControlFlowComponent } from "./components/compnent-control-flow/compnent-control-flow.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompnentControlFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjemploControlFlow';
}

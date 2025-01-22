import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HeroServiceService } from '../../services/hero-service.service';

@Component({
  selector: 'app-botorera',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './botorera.component.html',
  styleUrl: './botorera.component.css'
})
export class BotoreraComponent {
  @Input() miId! : number;
  @Input() padre! : string;

  router = inject(Router)
  DCheroService = inject(HeroServiceService);

  async borrarUsuario(id: number) : Promise<void>
  {
    let confirmar = confirm("¿Seguro que desea borrar el usuario con el id: " + id + "?")
    if(confirmar)
    { 
      this.DCheroService.delete(id)
      
          alert("Se borro el usuario")
         
          if(this.padre == 'view')
          {
            this.router.navigate(['/home']);
          }
        window.location.reload();
        
    }
  }
}

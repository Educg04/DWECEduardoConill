import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroServiceService } from '../../services/hero-service.service';
import { Icharacter } from '../../interfaces/icharacter';
import { BotoreraComponent } from "../../Components/botorera/botorera.component";
import { IpowerStats } from '../../interfaces/ipower-stats';

@Component({
  selector: 'app-hero-view',
  standalone: true,
  imports: [BotoreraComponent],
  templateUrl: './hero-view.component.html',
  styleUrl: './hero-view.component.css'
})
export class HeroViewComponent {
  activatedRoute = inject(ActivatedRoute)
  DCheroService = inject(HeroServiceService);

  powerstats : IpowerStats[] | undefined ;

  
  constructor()
  {
    
  }

  miHero! : Icharacter;
  

  ngOnInit() : void
  {
    this.activatedRoute.params.subscribe((params : any) =>
    {
      let id : number = params.idcharacter as number //lo mismo que en app.routes.ts

      try
      {
        this.DCheroService.getPersonajeById(id).subscribe((data : Icharacter) =>
        {
          this.miHero = data;
          
        })
        this.DCheroService.getAllPowers(0).subscribe((data : IpowerStats[]) =>
          {

            this.powerstats = data;
            console.log(this.powerstats);
          })
           

      }
      
      catch
      {
        console.log("Error")
      }
    });

    
}
}

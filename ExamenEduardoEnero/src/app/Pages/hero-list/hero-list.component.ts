import { Component, inject } from '@angular/core';
import { HeroServiceService } from '../../services/hero-service.service';
import { Icharacter } from '../../interfaces/icharacter';
import { HeroCardComponent } from '../../Components/hero-card/hero-card.component';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [HeroCardComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
  DCheroService = inject(HeroServiceService);
  characters : Icharacter[] ;

  constructor()
  {
    this.characters = [];
  }

  ngOnInit()
  {
    this.DCheroService.getAllPersonaje().subscribe((data : Icharacter[]) =>
    {
      this.characters = data ;
    })
  }

  
}

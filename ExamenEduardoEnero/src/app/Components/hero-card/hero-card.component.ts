import { Component, Input } from '@angular/core';
import { Icharacter } from '../../interfaces/icharacter';
import { BotoreraComponent } from "../botorera/botorera.component";

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [BotoreraComponent],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  @Input () miHero! : Icharacter;

}

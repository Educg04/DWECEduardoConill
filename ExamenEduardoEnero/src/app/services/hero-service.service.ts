import { inject, Injectable } from '@angular/core';
import { Icharacter } from '../interfaces/icharacter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { IpowerStats } from '../interfaces/ipower-stats';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  httpClient = inject(HttpClient);
  private heroesUrl : string = "http://localhost:8080/api";

  arrHeroes : Icharacter[] ;

  constructor(){
    this.arrHeroes = [];
  }

  //Coger personajes
  getAllPersonaje() : Observable<Icharacter []>
  {
    return this.httpClient.get<Icharacter []>(this.heroesUrl + '/characters');
  }

  getPersonajeById(id : number) : Observable<Icharacter>
  {
    return this.httpClient.get<Icharacter>(`${this.heroesUrl}/characters/${id}`);
  }

  getPersonajeByName(name : string) : Observable<Icharacter>
  {
    return this.httpClient.get<Icharacter>(`${this.heroesUrl}/characters/name/${name}`);
  }


  // Crud de personajes
  delete(idcharacterABorrar : number) : Promise<Icharacter>
  {
    return lastValueFrom(this.httpClient.delete<Icharacter>(`${this.heroesUrl}/characters/${idcharacterABorrar}`));
  }

  addPersonaje(personaje : Icharacter) : Observable <Icharacter>
  {
    return this.httpClient.post<Icharacter>(this.heroesUrl + '/characters', personaje);
  }

  updatePersonaje(personaje : Icharacter) : Observable <Icharacter>
  {
    return this.httpClient.put<Icharacter>(`${this.heroesUrl}/characters`, personaje);
  }

  getAllPowers(value : number) : Observable<IpowerStats []>
  {
    return this.httpClient.get<IpowerStats []>(`${this.heroesUrl}/powerstats/power/${value}`);
  }

}

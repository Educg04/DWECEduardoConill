import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroServiceService } from '../../services/hero-service.service';
import { Icharacter } from '../../interfaces/icharacter';
import { Iformulario } from '../../interfaces/iformulario';
import { IpowerStats } from '../../interfaces/ipower-stats';


@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  personajeFroms : FormGroup ;
  tipo : string = "Nuevo";

  activatedRoute = inject(ActivatedRoute)
  DCheroService = inject(HeroServiceService);
  router = inject(Router)
  
  constructor(){
  this.personajeFroms = new FormGroup
    ({
      id : new FormControl ('', []),
      heroname : new FormControl ('', [Validators.required]),
      fullname : new FormControl ('', []),
      image1 : new FormControl ('', []),
      image2 : new FormControl ('', []),
      image3 : new FormControl ('', []),
      gender : new FormControl ('', []),
      race : new FormControl ('', []),
      alignment : new FormControl ('', []),

      intelligence : new FormControl ('', []),
      strength : new FormControl ('', []),
      speed : new FormControl ('', []),
      durability : new FormControl ('', []),
      power : new FormControl ('', []),
      combat : new FormControl ('', [])

    }) 
  }

  ngOnInit()
  {
    this.activatedRoute.params.subscribe((params:any) =>
    {
      if(params.idcharacter)
      {
        this.tipo = "Actualizar"
        
        this.DCheroService.getPersonajeById(params.idcharacter).subscribe((data : Icharacter) =>
        {
          this.personajeFroms = new FormGroup
            ({
              id : new FormControl(data.id, []),
              heroname : new FormControl (data.heroname, [Validators.required]),
              fullname : new FormControl (data.fullname, []),
              image1 : new FormControl (data.image1, []),
              image2 : new FormControl (data.image2, []),
              image3 : new FormControl (data.image3, []),
              gender : new FormControl (data.gender, []),
              race : new FormControl (data.race, []),
              alignment : new FormControl (data.aligment, []),

             
            })
        })
      }

    })

  }

  sendPersonaje()
  {
    let form : Iformulario = this.personajeFroms.value as Iformulario;
    let hero : Icharacter = {
      id : form.id,
      heroname : form.heroname,
      fullname : form.fullname,
      image1 : form.image1,
      image2 : form.image2,
      image3 : form.image3,
      gender : form.gender,
      race : form.race,
      aligment : form.alignment,
    } ;

    let stat : IpowerStats = {
      id : form.id,
      intelligence : form.intelligence,
      strength : form.strength,
      speed : form.speed,
      durability : form.durability,
      power : form.power,
      combat :form.combat,
      characters_id : hero.id
    };

    let jsonToPost : any ={
      id : hero.id,
      heroname : hero.heroname,
      fullname : hero.fullname,
      image1 : hero.image1,
      image2 : hero.image2,
      image3 : hero.image3,
      gender : hero.gender,
      race : hero.race,
      aligment : hero.aligment,
      powerstats : {
        id : stat.id,
        intelligence : stat.intelligence,
        strength : stat.strength,
        speed : stat.speed,
        durability : stat.durability,
        power : stat.power,
        combat :stat.combat,
        characters_id : hero.id
      }
    }

    
    
    this.activatedRoute.params.subscribe((params : any) =>
    {
        if(params.idcharacter)
        {
          this.DCheroService.updatePersonaje(hero).subscribe((data : Icharacter) =>
          {
            alert("Se actualizó correctamente el personaje : " + data.heroname)
            this.router.navigate(['/home'])
          })
        }
        else//Añadir personaje
        {
          this.DCheroService.addPersonaje(jsonToPost).subscribe((data : Icharacter) =>
          {
            let respuesta = data;
              if(respuesta)
                {
                  console.log(respuesta)
                  alert("Se añadió el personaje " + respuesta.heroname)
                  this.router.navigate(['/home'])
                }
              
              else{
                alert("No se ha podido insertar el usuario")
              }  
          })
        }

    })

    this.personajeFroms.reset();
  
  }

    checkControl(formControlName: string, validator : string): boolean | undefined {
      return this.personajeFroms.get(formControlName)?.hasError(validator) && this.personajeFroms.get(formControlName)?.touched;
    }
}

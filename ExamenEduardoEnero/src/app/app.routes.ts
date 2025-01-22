import { Routes } from '@angular/router';
import { HeroListComponent } from './Pages/hero-list/hero-list.component';
import { HeroViewComponent } from './Pages/hero-view/hero-view.component';
import { HeroFormComponent } from './Pages/hero-form/hero-form.component';

export const routes: Routes = [

    {path : "" , pathMatch:"full", redirectTo : "home"},
    {path : "home", component : HeroListComponent},
    {path : "characters/:idcharacter", component : HeroViewComponent},
    {path : "updateHero/:idcharacter", component : HeroFormComponent},
    {path : "newHero", component : HeroFormComponent},

    
    {path : "**", redirectTo : "home"}
    

];

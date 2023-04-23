import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent },
  {path: 'personas',component:PersonasComponent},
  {path: '', redirectTo:'personas', pathMatch:'full'},
  {path: '**' , component:PaginaNoEncontradaComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

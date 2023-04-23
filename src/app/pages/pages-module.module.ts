import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { PersonasComponent } from './personas/personas.component';


@NgModule({
  declarations: [
    HomeComponent,
    PaginaNoEncontradaComponent,
    PersonasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class PagesModuleModule { }

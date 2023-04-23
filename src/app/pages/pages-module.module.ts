import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonasComponent } from './personas/personas.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    HomeComponent,
    PaginaNoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class PagesModuleModule { }

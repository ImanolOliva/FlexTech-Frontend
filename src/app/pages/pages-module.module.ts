import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { PersonasComponent } from './personas/personas.component';
import { ChartPaisesComponent } from './chart-paises/chart-paises.component';
import { LottieModule } from 'ngx-lottie';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';




 
@NgModule({
  declarations: [
    PaginaNoEncontradaComponent,
    PersonasComponent,
    ChartPaisesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LottieModule,
    RouterModule,
    NgxChartsModule

  ]
})
export class PagesModuleModule { }

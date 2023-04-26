import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.css']
})
export class PaginaNoEncontradaComponent {

  options: AnimationOptions = {
    path:"../../../assets/404-not-found.json"
  }


}

import { Component, OnInit } from '@angular/core';
import { PersonaPaises } from 'src/app/models/PersonaPaises';
import { PersonaServiceService } from 'src/app/service/persona-service.service';

@Component({
  selector: 'app-chart-paises',
  templateUrl: './chart-paises.component.html',
  styleUrls: ['./chart-paises.component.css']
})
export class ChartPaisesComponent implements OnInit{

  
  single : PersonaPaises[] ;

  view: [number,number] = [900, 400];
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  constructor(private servicePersona:PersonaServiceService){
  
  }

  

  ngOnInit(){
    this.addSingle();
  }


  addSingle(){
    this.servicePersona.getPersonasPorPaises().subscribe({
      next: (data: PersonaPaises) =>{
         console.log(data);        
            this.single.push({
              "name" : data.name[0],
              "value" :data.value[1]
            }) 
      },error: (err)=> {
        console.log(err);
      },
      complete() {
        console.log("esta todo ok en el addSingle");
      },
    })
  }
  


  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
 
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';
import { PersonaServiceService } from 'src/app/service/persona-service.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit{

  personaResponse: Persona [] = [];
  form: FormGroup;
  flat: boolean;
  isEditing: boolean = false;
  selectId: number = 0;
    
    constructor(private servicePerson: PersonaServiceService){};

    ngOnInit(){
      this.createForm();
    }

    createForm(){
      this.form = new FormGroup({
        nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
        apellido: new FormControl('',[Validators.required,Validators.minLength(3)]),
        fechaNacimiento : new FormControl('',[Validators.required]),
        direccion: new FormControl('',[Validators.required,Validators.minLength(3)]),
        telefono: new FormControl('',[Validators.required,Validators.minLength(7)]),
        pais: new FormControl('',[Validators.required,Validators.minLength(3)]),
      })
    }

    
    save(){
       let persona =  new Persona();

       persona.nombre = this.form.get('nombre').value;
       persona.apellido = this.form.get('apellido').value;
       persona.fechaNacimiento = this.form.get('fechaNacimiento').value;
       persona.direccion = this.form.get('direccion').value;
       persona.telefono = this.form.get('telefono').value;
       persona.pais = this.form.get('pais').value;

        this.servicePerson.createPersona(persona).subscribe({
          next: (data: Persona) => {
            console.log(data);
            this.form.reset();
          },
          error: (err) => {
              console.log(err);
          }, complete: () => {
            this.getPersonas();
          }
        });
      }

    getPersonas(){
        this.servicePerson.getAllPersonas().subscribe({
          next: (data: Persona[]) =>{
           this.personaResponse = data;
          },
          error(err) {
              console.log("Estoy en el error");
              console.log(err);
          },
          complete() {
            console.log("ok");
          },
        })
      }


    edit(id: number){
      
    }

    delete(id: number){
      
    }


}

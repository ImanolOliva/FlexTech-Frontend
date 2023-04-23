import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'

})
export class PersonaServiceService {


  constructor(private http:HttpClient) {


  }

  getAllPersonas(){
    let endpoint = "http://localhost:8080/api/";
    return this.http.get(`${endpoint}persona`);
  }
  
  getPersona(id: number){
    let endpoint = "http://localhost:8080/api/";
    return this.http.get(`${endpoint}persona/${id}`);
  }
 

  createPersona(request:Persona){
    let endpoint = "http://localhost:8080/api/";
    return this.http.post(`${endpoint}persona`,request)
  }


  updatePersona(request:Persona,id:number){
    let endpoint = "http://localhost:8080/api/";
    return this.http.put(`${endpoint}persona/${id}`,request);

  }

  deletePersona(id:number){
    let endpoint = "http://localhost:8080/api/";
    return this.http.delete(`${endpoint}persona/${id}`);

  }
}

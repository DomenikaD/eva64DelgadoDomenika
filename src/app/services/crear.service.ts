import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearService {
 tareas: string[] = []
  constructor() { }

  add(tareas: string){
    this.tareas.push(tareas)
  }

  clear(){
    this.tareas = []
  }

  get(){
    return this.tareas
  }
}

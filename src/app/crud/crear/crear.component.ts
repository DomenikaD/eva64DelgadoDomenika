import { Component } from '@angular/core';
import { CrearService } from '../../services/crear.service';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.scss'
})
export class CrearComponent {

  tarea:string = 'nuevo'

  tareas: string[] = []

  constructor(private crearService: CrearService){


  }
  
  ngOnInit(){
    this.tareas = this.crearService.get()
  }
  
  agregar(){
    this.crearService.add(this.tarea)
  }


limpiar(){
  this.crearService.clear()
  this.ngOnInit()
}

}
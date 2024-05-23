import { Routes } from '@angular/router';
import { CrearComponent } from './crud/crear/crear.component';
import { LeerComponent } from './crud/leer/leer.component';
import { EliminarComponent } from './crud/eliminar/eliminar.component';

export const routes: Routes = [
    {path: 'crear', title: 'Crear Tarea', component: CrearComponent},
    {path: 'leer', title: 'Leer Tarea', component: LeerComponent},
    {path: 'eliminar', title: 'Eliminar Tarea', component: EliminarComponent},
];

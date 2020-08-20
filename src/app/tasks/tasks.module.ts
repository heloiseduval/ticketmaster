import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
  //Ne peut s'afficher que dans le module en cours
  //(Dans les composant déclarés ici)
  declarations: [
    TasksComponent    
  ],
  imports: [
    CommonModule, 
    SharedModule,
    TasksRoutingModule
  ],
  //Rendre visible les composants et modules plcés ici
  //dans les modules qui vous importe
  exports:[
    TasksComponent
  ]
})
export class TasksModule { }

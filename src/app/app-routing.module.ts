import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskActiveComponent } from './components/pages/task-active/task-active.component';
import { TaskDoneComponent } from './components/pages/task-done/task-done.component';
import { ToDoComponent } from './components/pages/to-do/to-do.component';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'task-active', component: TaskActiveComponent },
  { path: 'task-done', component: TaskDoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponets = [ToDoComponent, TaskActiveComponent, TaskDoneComponent]
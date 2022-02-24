import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponets } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToDoComponent } from './components/pages/to-do/to-do.component';
import { TaskActiveComponent } from './components/pages/task-active/task-active.component';
import { TaskDoneComponent } from './components/pages/task-done/task-done.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToDoComponent,
    TaskActiveComponent,
    TaskDoneComponent,
    routingComponets,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

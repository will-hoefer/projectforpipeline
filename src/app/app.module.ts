import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SelectTaskComponent } from './select-task/select-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTasksComponent,
    CreateTaskComponent,
    SelectTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

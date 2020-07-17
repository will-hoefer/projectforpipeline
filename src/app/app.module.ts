import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SelectTaskComponent } from './select-task/select-task.component';
import { RouterModule } from '@angular/router';
import { ViewService } from './services/view.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewTasksComponent,
    CreateTaskComponent,
    SelectTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'view', component:ViewTasksComponent},
      {path: 'create', component:CreateTaskComponent},
      {path: 'select', component:SelectTaskComponent},
      {path: '**', redirectTo:'view'},
       ]),
     ],
  providers: [ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }

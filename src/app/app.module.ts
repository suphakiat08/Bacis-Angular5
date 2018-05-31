import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoService } from './service/todo.service';

const appRoutes:Routes = [
  { path: "", component: TodoComponent },
  { path: "students", component: StudentsComponent },
  { path: "aboutus", component: AboutusComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AboutusComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { SegundoComponenteComponent } from './components/segundo-componente/segundo-componente.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormTaskPageComponent } from './pages/form-task-page/form-task-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsModule } from './modules/lists/lists.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    SegundoComponenteComponent,
    SaludoComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    HomePageComponent,
    NotFoundPageComponent,
    FormTaskPageComponent,
    ContactListComponent,
    ContactComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ListsModule,
    HttpClientModule // Importamos el modulo HttpClientModule para hacer peticiones http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

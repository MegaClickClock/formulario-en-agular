import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InputBottonComponent } from './input-botton/input-botton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormularioComponent,
    InputBottonComponent,
    InformacionPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

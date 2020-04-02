import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Http Module
import { HttpClientModule } from '@angular/common/http';
import { PipeSeguridadPipe } from './pipes/pipe-seguridad.pipe';

// Pipes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PipeSeguridadPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

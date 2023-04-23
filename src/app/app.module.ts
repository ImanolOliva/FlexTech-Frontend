import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModuleModule } from './pages/pages-module.module';
import { PersonasComponent } from './pages/personas/personas.component';
import { ReactiveFormsModule } from '@angular/forms';
;

// Note we need a separate function as it's required
// by the AOT compiler.

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent

  ],
  imports: [
    BrowserModule,
    PagesModuleModule,
    AppRoutingModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

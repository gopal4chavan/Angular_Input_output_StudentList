import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SmartComponent } from './smart/smart.component';


@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

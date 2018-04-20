import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ZoomComponent } from './zoom/zoom.component';
import { Zoom1Component } from './zoom1/zoom1.component';
import { LengthComponent } from './length/length.component';
import { MouseComponent } from './mouse/mouse.component';



@NgModule({
  declarations: [
    AppComponent,
    ZoomComponent,
    Zoom1Component,
    LengthComponent,
    MouseComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

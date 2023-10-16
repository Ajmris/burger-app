import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { VegeburgerComponent } from './vegeburger/vegeburger.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    VegeburgerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Dodaj import
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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

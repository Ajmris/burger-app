import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Dodaj import
import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { VegeburgerComponent } from './vegeburger/vegeburger.component';
import { BindingComponent } from './binding/binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    VegeburgerComponent,
    BindingComponent,
    EventbindingComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

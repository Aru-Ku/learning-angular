import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salary-calculator.modal';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'greeter', component: GreeterComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'salary-calc', component: SalaryCalculatorComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    SalaryCalculatorComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [SalaryCalculatorModel],
  bootstrap: [AppComponent]
})
export class AppModule { }

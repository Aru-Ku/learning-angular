import { Component, OnInit } from '@angular/core';
import { SalaryCalculatorModel } from './salary-calculator.modal';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {
  // modal: SalaryCalculatorModel = new SalaryCalculatorModel();

  constructor(public modal: SalaryCalculatorModel) { }

  
  ngOnInit(): void {
    window['modal'] = this.modal;
  }

}

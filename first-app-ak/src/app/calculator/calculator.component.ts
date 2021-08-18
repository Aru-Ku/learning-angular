import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  answer: number = 0;
  n1: number = 0;
  n2: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setN1(v: string) {
    this.n1 = +v;
  }
  setN2(v: string) {
    this.n2 = +v;
  }

  add() { this.answer = this.n1 + this.n2; }
  subtract() { this.answer = this.n1 - this.n2; }
  multiply() { this.answer = this.n1 * this.n2; }
  divide() { this.answer = this.n1 / this.n2; }

}

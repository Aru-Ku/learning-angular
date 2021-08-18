import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  greetingMsg: string = "Enter your name";

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClicked(value: string) {
    this.greetingMsg = `Hi ${value}, welcome !`;
  }

}

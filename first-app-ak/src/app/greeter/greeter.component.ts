import { Component, OnInit } from '@angular/core';
import { GreeterService } from './greeter.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  greetingMsg: string = "Enter your name";

  constructor(private greeterService: GreeterService) { }

  ngOnInit(): void {
  }

  onBtnClicked(value: string) {
    this.greetingMsg = this.greeterService.greet(value);
  }

}

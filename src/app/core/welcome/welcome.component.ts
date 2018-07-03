import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  myParams: object = {};
  myStyles: object = {};
  width: number;
  height: number;

  constructor() { }

  ngOnInit() {
    this.width = 100;
    this.height = 100;
    this.myStyles = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.myParams = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#03DAC5'
        },
        shape: {
          type: 'triangle'
        },
        line_linked: {
          enabled: false
        }
      }
    };
  }
}


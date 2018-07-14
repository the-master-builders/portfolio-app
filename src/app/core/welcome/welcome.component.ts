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
    this.height = 80;
    this.myStyles = {
      'position': 'fixed',
      'width': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.myParams = {
      particles: {
        number: {
          value: 120,
        },
        color: {
          value: '#03DAC5'
        },
        shape: {
          type: 'star',
          size: {
            value: 15
          }
        }
      }
    };
  }
}


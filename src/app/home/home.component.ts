
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class   HomeComponent implements OnInit {
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('visited')) {
      this.show = false;
    } else {
      localStorage.setItem('visited', 'true');
    }
  }

  hideWelcome() {
    this.show = false;
  }
}


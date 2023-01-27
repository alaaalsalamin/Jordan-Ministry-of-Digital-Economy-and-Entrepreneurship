import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }
  images = ['../../assets/1.jpg', '../../assets/2.jpeg', '../../assets/3.jpg', '../../assets/4.jpg',
'../../assets/5.jpg', '../../assets/7.jpg', '../../assets/8.jpg'];
}

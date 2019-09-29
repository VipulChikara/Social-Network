import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images=[
    {name:'Lokesh',like:324,dislike:0},
    {name:'Pulkit',like:123,dislike:0},
    {name:'Ananya',like:736,dislike:0},
    {name:'Shrey',like:123,dislike:0},
    {name:'Sunny',like:213,dislike:0},
    {name:'Shruti',like:209,dislike:0},
    {name:'Kajal',like:124,dislike:0},
    {name:'Katrina',like:345,dislike:0},
    {name:'Disha',like:764,dislike:0},
  ]

}

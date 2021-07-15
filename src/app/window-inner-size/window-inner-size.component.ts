import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-inner-size',
  templateUrl: './window-inner-size.component.html',
  styleUrls: ['./window-inner-size.component.css']
})
export class WindowInnerSizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
   console.log("Width: " + event.target.innerWidth);
   console.log("Height: " + event.target.innerHeight);
  }

}

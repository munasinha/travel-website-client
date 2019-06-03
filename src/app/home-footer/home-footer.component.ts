import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {

  date:string;

  constructor() { }

  ngOnInit() {

    this.date = new Date().getFullYear().toString();

  }

}

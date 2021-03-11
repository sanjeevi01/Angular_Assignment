import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date: string = "";

  constructor() {

    setInterval(() => {

      let dateAndTime = new Date();

      this.date = dateAndTime.toDateString() + " " + dateAndTime.toLocaleTimeString();


    }, 1000);

  }

  ngOnInit(): void {
  }

}

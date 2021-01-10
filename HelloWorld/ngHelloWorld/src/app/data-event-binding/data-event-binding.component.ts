import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-event-binding',
  templateUrl: './data-event-binding.component.html',
  styleUrls: ['./data-event-binding.component.css']
})
export class DataEventBindingComponent implements OnInit {

  sometext = 'something';

  // tslint:disable-next-line:typedef
  handler(event) {
    console.log('Hello there!');
    console.log(event);
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log('Something to init');
  }

}

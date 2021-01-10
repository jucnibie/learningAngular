import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-control-something',
  templateUrl: './control-something.component.html',
  styleUrls: ['./control-something.component.css']
})
export class ControlSomethingComponent implements OnInit {

  user = {
    name: 'Jucni Bie',
    age: 21,
    handle: 'CEO & Founder, Art Lover',
  };

  newhandle = this.user.handle;
  isStaff = false;
  isAdult = 17;

  // tslint:disable-next-line:typedef
  changeHandle() {
    this.user.handle = this.newhandle;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

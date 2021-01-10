import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() isChecked: boolean;
  @Output() changeChecked = new EventEmitter<boolean>();


  constructor() {
  }

  ngOnInit(): void {
  }

  onCheck(): void {
    this.isChecked = !this.isChecked;
    this.changeChecked.emit(this.isChecked);  // Only emit Input Object, which is the same type object
  }

}

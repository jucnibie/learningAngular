import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-inputbinding',
  templateUrl: './inputbinding.component.html',
  styleUrls: ['./inputbinding.component.css']
})
export class InputbindingComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string;
  @Input() progressColor: string;
  @Input() progress = 0;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change');
    if ('progress' in changes) {
      if (typeof changes["progress"].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }

  ngOnInit() {
  }
}

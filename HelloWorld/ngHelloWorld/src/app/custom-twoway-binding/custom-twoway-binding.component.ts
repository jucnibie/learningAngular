import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ToggleComponent} from './toggle/toggle.component';

@Component({
  selector: 'app-custom-twoway-binding',
  templateUrl: './custom-twoway-binding.component.html',
  styleUrls: ['./custom-twoway-binding.component.css']
})
export class CustomTwowayBindingComponent implements OnInit {

  // Using static: true to resolve component when Component onInit
  @ViewChild('toggleComp', {static: true}) toggleComp: ToggleComponent;
  @ViewChild('toggleContainer') container: ElementRef<HTMLDivElement>;

  // return HTMLInputElement to using input in templates, to try focus after 3 second
  @ViewChild('inputElement', {static: true}) inputElement: ElementRef<HTMLInputElement>;

  // ViewChildren return a querylist for list component in templates
  @ViewChildren(ToggleComponent) toggleList: QueryList<ToggleComponent>;

  message = 'Custom Two-way Binding';
  checked = 'true';
  isChecks = {
    one: true,
    two: false
  };

  toggleInside(): void {
    this.toggleComp.onCheck();
  }

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 3000);
    console.log('ngOnInit: ', this.toggleComp, this.container);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ', this.toggleComp, this.container);
    console.log('Toggle List: ', this.toggleList);
  }

}

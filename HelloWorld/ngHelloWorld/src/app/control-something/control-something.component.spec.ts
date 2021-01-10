import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSomethingComponent } from './control-something.component';

describe('ControlSomethingComponent', () => {
  let component: ControlSomethingComponent;
  let fixture: ComponentFixture<ControlSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

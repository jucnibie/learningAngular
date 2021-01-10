import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTwowayBindingComponent } from './custom-twoway-binding.component';

describe('CustomTwowayBindingComponent', () => {
  let component: CustomTwowayBindingComponent;
  let fixture: ComponentFixture<CustomTwowayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTwowayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTwowayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

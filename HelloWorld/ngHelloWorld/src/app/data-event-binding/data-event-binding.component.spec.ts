import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEventBindingComponent } from './data-event-binding.component';

describe('DataEventBindingComponent', () => {
  let component: DataEventBindingComponent;
  let fixture: ComponentFixture<DataEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

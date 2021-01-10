import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplatengcontainerComponent } from './ngtemplatengcontainer.component';

describe('NgtemplatengcontainerComponent', () => {
  let component: NgtemplatengcontainerComponent;
  let fixture: ComponentFixture<NgtemplatengcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgtemplatengcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtemplatengcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

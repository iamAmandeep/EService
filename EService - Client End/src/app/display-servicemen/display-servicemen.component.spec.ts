import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayServicemenComponent } from './display-servicemen.component';

describe('DisplayServicemenComponent', () => {
  let component: DisplayServicemenComponent;
  let fixture: ComponentFixture<DisplayServicemenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayServicemenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayServicemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

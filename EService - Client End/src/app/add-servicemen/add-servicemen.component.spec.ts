import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicemenComponent } from './add-servicemen.component';

describe('AddServicemenComponent', () => {
  let component: AddServicemenComponent;
  let fixture: ComponentFixture<AddServicemenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicemenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

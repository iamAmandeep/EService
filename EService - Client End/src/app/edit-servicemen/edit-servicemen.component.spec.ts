import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicemenComponent } from './edit-servicemen.component';

describe('EditServicemenComponent', () => {
  let component: EditServicemenComponent;
  let fixture: ComponentFixture<EditServicemenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServicemenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServicemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

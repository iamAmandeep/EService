import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboServicesComponent } from './combo-services.component';

describe('ComboServicesComponent', () => {
  let component: ComboServicesComponent;
  let fixture: ComponentFixture<ComboServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

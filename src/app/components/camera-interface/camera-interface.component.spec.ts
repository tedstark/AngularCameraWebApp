import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraInterfaceComponent } from './camera-interface.component';

describe('CameraInterfaceComponent', () => {
  let component: CameraInterfaceComponent;
  let fixture: ComponentFixture<CameraInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

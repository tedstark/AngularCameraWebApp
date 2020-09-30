import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraModuleComponent } from './camera-module.component';

describe('CameraModuleComponent', () => {
  let component: CameraModuleComponent;
  let fixture: ComponentFixture<CameraModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

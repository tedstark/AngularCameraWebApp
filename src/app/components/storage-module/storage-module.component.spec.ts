import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageModuleComponent } from './storage-module.component';

describe('StorageModuleComponent', () => {
  let component: StorageModuleComponent;
  let fixture: ComponentFixture<StorageModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

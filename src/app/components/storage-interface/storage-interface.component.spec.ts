import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageInterfaceComponent } from './storage-interface.component';

describe('StorageInterfaceComponent', () => {
  let component: StorageInterfaceComponent;
  let fixture: ComponentFixture<StorageInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

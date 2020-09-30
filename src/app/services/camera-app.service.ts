
import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { CameraAppComponent } from '../components/camera-app/camera-app.component';

@Injectable()
export class CameraAppService {
  constructor() {}

  startCamera() {
    const cameraApp: NgElement & WithProperties<CameraAppComponent> = document.createElement('camera-app') as any;
    // Add to the DOM
    document.body.appendChild(cameraApp);
  }
}
import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CameraAppComponent } from '../camera-app/camera-app.component';
import { CameraAppService } from '../../services/camera-app.service';

@Component({
  selector: 'app-camera-module',
  templateUrl: './camera-module.component.html',
  styleUrls: ['./camera-module.component.css']
})
export class CameraModuleComponent implements OnInit {

  constructor() { 
  }
  // constructor(injector: Injector, public cameraApp: CameraAppService) { 
  //   const cameraElement = createCustomElement(CameraAppComponent, {injector})
  //   customElements.define('camera-app', cameraElement)
  // }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit, Injector } from '@angular/core';
// import { createCustomElement } from '@angular/elements';
// import { CameraAppComponent } from '../camera-app/camera-app.component';
import { CameraAppService } from '../../services/camera-app.service';

@Component({
  selector: 'app-camera-module',
  templateUrl: './camera-module.component.html',
  styleUrls: ['./camera-module.component.css']
})

export class CameraModuleComponent implements OnInit {

  // constructor() { 
  // }
  constructor(injector: Injector, public cameraApp: CameraAppService) {
    // if (!customElements.get('camera-app'))  {
    //   const cameraElement = createCustomElement(CameraAppComponent, {injector})
    //   customElements.define('camera-app', cameraElement)
    // } else {
    //   console.log("Camera already Exists")
    // }
  }

  ngOnInit(): void {
    // const cameraApp = document.querySelector('#camera')
    // cameraApp.cameraTest();
    
  }
  
  startCamera() {
    this.cameraApp.stopCamera();
  //   const cameraAppDiv = document.getElementById('#cameraApp')
  //   this.cameraApp.startCamera()  
  }

  // stopCamera() {
  //   const videoElement = document.querySelector('#video');    
  //   (<any>videoElement).srcObject.getVideoTracks().forEach(track => track.stop());
  // }

}

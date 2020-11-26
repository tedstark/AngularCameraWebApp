import { Injectable } from '@angular/core';
import { UtilitiesService } from '../services/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(
    private utilities: UtilitiesService, 
  ) { }

  appVersion = 'v.1.0.0 - 11/24/2020';
    
  /**
   * storageVariables to be used throughout the application. Most are initialized in initialize data. 
   */
  starkDevCameraApp = {
    // Camera App Vars
    cameraModalHeaderTitle: 'starkDevCameraApp.cameraModalHeaderTitle',
    selectedCameraInput: 'starkDevCameraApp.selectedCameraInput',
    cameraConstraints: 'starkDevCameraApp.cameraConstraints',
    cameraCapabilities: 'starkDevCameraApp.cameraCapabilities',
  }

  setCameraModalTitle(title) {
    this.utilities.sessionStorageAdd(this.starkDevCameraApp.cameraModalHeaderTitle, title)
  }

  setSelectedCameraInput(input) {
    this.utilities.sessionStorageAdd(this.starkDevCameraApp.selectedCameraInput, input)
  }

  setCameraConstraints(constraints) {
    this.utilities.sessionStorageAdd(this.starkDevCameraApp.cameraModalHeaderTitle, constraints)
  }
  
  setCameraCapabilities(capabilities) {
    this.utilities.sessionStorageAdd(this.starkDevCameraApp.cameraModalHeaderTitle, capabilities)
  }
}

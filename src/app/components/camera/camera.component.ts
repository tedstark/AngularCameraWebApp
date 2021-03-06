import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  videoElement: any;
  videoSelect: any;
  selectors: any;
  constraints: {}
  videoInputs: any;
  selectedVideoInput = <any>null;
  selectedCameraCapabilities = <any>null;
  showCameraSelectDiv =  false;
  showCameraPreviewDiv = false;
  showPicturePreviewDiv = false;
  showPictureSave = false;

  constructor(public cameraApp: CameraService) { }

  ngOnInit(): void {
    // navigator.mediaDevices.getUserMedia({ video: true })
    // .then(this.showPreview)
    // .then(function(response){
    //   console.log("🍪 showPreview response",response)
    // })
  }

  cameraTest() {
    console.log("🍪🍪🍪")
  }

  
  showPreview(stream) {
    const videoElement = document.querySelector('#video');    
    (<any>videoElement).srcObject = stream;
    return navigator.mediaDevices.enumerateDevices();
  }

  gotDevices(deviceInfos) {
    const values = this.selectors.map(select => select.value);
    this.selectors.forEach(select => {
      while (select.firstChild) {
        select.removeChild(select.firstChild);
      }
    });

    for (let i = 0; i !== deviceInfos.length; ++i) {
      const deviceInfo = deviceInfos[i];
      const option = document.createElement('option');
      option.value = deviceInfo.deviceId;
      if (deviceInfo.kind ===  'videoinput') {
        option.text = deviceInfo.label || `camera ${this.videoSelect.length + 1}`;
        this.videoSelect.appendChild(option);
      } else {
        console.log('Some other kind of source/device: ', deviceInfo);
      }
    }
    this.selectors.forEach((select, selectorIndex) => {
      if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
        select.value = values[selectorIndex];
      }
    });
  }

  handleError(error) {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
  }

  gotStream() {
  }

  start() {
    if ((<any>window).stream) {
      (<any>window).stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    const videoSource =this. videoSelect.value;
    const constraints = {
      video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    };
   
    navigator.mediaDevices.getUserMedia(constraints)
      .then(this.gotStream)
      .then(this.gotDevices)
      .catch(this.handleError);
  }

  stopCamera() {
    console.log("🎆🎆🎆")
    if ((<any>window).stream) {
      (<any>window).stream.getTracks().forEach(track => {
        track.stop();
      });
    }
  }

}

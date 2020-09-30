import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'camera-app',
  templateUrl: './camera-app.component.html',
  styleUrls: ['./camera-app.component.css']
})
export class CameraAppComponent implements OnInit {

  videoElement: any;
  videoSelect: any;
  selectors: any;

  constructor() { }

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
    console.log("🍪 stream preview:", stream);
    const videoElement = document.querySelector('#video');    
    console.log("🍪", videoElement);
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


}

import exifr  from 'exifr';
import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { CameraComponent } from '../components/camera/camera.component';
import { ImageCapture } from 'image-capture';

@Injectable()
export class CameraService {

  cameraElement: NgElement & WithProperties<CameraComponent> = document.createElement('camera-app') as any;

  constructor(    
  ) {}

  getUserMedia() {
    let constraints = {
      video: {
          facingMode: "environment",
          // width: { max: 600 },
          // height: { max: 797 }
      }
    };

    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) { 
      navigator.mediaDevices.getUserMedia(constraints)
        .then(this.startCamera.bind(this))
        .then(function(response){
          // console.log("🍪 showPreview response",response)
        })
        .catch(this.handleError);
    } else {
      alert('Sorry, a camera is  not available on this device.');
    }
  }

  startCamera(stream) {
    const videoElement = document.getElementById('cameraPreview');    
    (<any>videoElement).srcObject = stream;
    return navigator.mediaDevices.enumerateDevices();
  }

  stopCamera() {
    console.log("🛑")
    const videoElement = document.getElementById('cameraPreview');    
    (<any>videoElement).srcObject.getVideoTracks().forEach(track => track.stop());
  }

  getScreenShot() {
    const videoElement = <HTMLVideoElement>document.getElementById('cameraPreview');    
    const canvasElement = <HTMLCanvasElement>document.getElementById('cameraScreenshot');
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasElement.getContext('2d').drawImage(videoElement, 0, 0);
    
    this.showEXIFData(videoElement.srcObject);
  }

  handleError(error) {
    console.log('Error: ', error);
    alert('There was an error accessing the camera. Please check the site settings on your device to allow camera use with Rover.');
  }

  stopCameraStream() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) { 
      // navigator.mediaDevices.getUserMedia({video: true})
      //   .then(function(response){
      //     console.log("🍪 showPreview response",response)
      //   })
      //   .catch(this.handleError);
      // navigator.mediaDevices.enumerateDevices().then(function(response){
      //     console.log("🎆", response)
      // })
    }
  }

  showEXIFData(stream) {
    let track = stream.getVideoTracks()[0];
    let imageCapture = new ImageCapture(track);
    imageCapture.takePhoto().then(async blob => {
      console.log(blob);
      const newFile = new File([blob], "photo.jpg", { type: "image/jpeg" });
      // const exifr = new Exifr();
      
      // Line 84 Results in src\assets\exifr error 1.jpg in VS Code & src\assets\exifr error 2.jpg in the console
      exifr.parse(newFile).then(output => console.log('Camera:', output))
      
      // Line 87 Results in src\assets\exifr error 3.jpg in the console.
      // exifr.read(blob).then(exifr.parse).then(output => console.log('Camera:', output.Make, output.Model))
    });
  }
}

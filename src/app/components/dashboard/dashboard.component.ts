import { Component, OnInit } from '@angular/core';
import { CameraAppService } from '../../services/camera-app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public cameraApp: CameraAppService) { }

  ngOnInit(): void {
    this.cameraApp.stopCameraStream();
  }

}

import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera.service';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private cameraApp: CameraService,
    private dataStore: DataStoreService
  ) { }

  ngOnInit(): void {
    this.cameraApp.stopCameraStream();
    this.dataStore.setCameraModalTitle( "Hello Ted");
  }

}

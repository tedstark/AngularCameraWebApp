import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraModuleComponent } from './components/camera-module/camera-module.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StorageModuleComponent } from './components/storage-module/storage-module.component';
import { CameraAppComponent } from './components/camera-app/camera-app.component';
import { CameraAppService } from './services/camera-app.service';

@NgModule({
  declarations: [
    AppComponent,
    CameraModuleComponent,
    DashboardComponent,
    StorageModuleComponent,
    CameraAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CameraAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

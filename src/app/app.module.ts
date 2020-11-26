import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraModuleComponent } from './components/camera-module/camera-module.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StorageModuleComponent } from './components/storage-module/storage-module.component';
import { CameraService } from './services/camera.service';
import { CameraComponent } from './components/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraModuleComponent,
    DashboardComponent,
    StorageModuleComponent,
    CameraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }

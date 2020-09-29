import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraInterfaceComponent } from './components/camera-interface/camera-interface.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StorageInterfaceComponent } from './components/storage-interface/storage-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraInterfaceComponent,
    DashboardComponent,
    StorageInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

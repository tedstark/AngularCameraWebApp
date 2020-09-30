import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CameraModuleComponent } from './components/camera-module/camera-module.component';
import { StorageModuleComponent } from './components/storage-module/storage-module.component';


const routes: Routes = [
  {path: 'camera', component: CameraModuleComponent, pathMatch: 'full'},
  {path: 'storage', component: StorageModuleComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: '**', component: DashboardComponent, pathMatch: 'full'},   
  // {path: '', redirectTo: '/dashboard',  pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

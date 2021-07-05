import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadaresRoutingModule } from './radares-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RadaresRoutingModule
  ]
})
export class RadaresModule { }

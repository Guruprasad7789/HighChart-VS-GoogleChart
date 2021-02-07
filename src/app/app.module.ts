import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HighChartComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

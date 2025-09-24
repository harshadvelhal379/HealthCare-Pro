import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SettingsComponent } from './modules/settings/settings.component';
import { MatOption, MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { PatientsComponent } from './modules/tabs/patients/patients.component';
import { AppointmentsComponent } from './modules/tabs/appointments/appointments.component';
import { ReportsComponent } from './modules/tabs/reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SettingsComponent,
    PatientsComponent,
    AppointmentsComponent,
    ReportsComponent,
       
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatMenuModule, MatIconModule,
    MatButtonModule,MatDialogModule, MatButtonModule, MatOption, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatOptionModule, MatSlideToggleModule, MatDialogModule,  MatButtonModule,  MatDividerModule, MatIconModule,
    FormsModule
  
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

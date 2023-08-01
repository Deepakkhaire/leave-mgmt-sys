import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpDataHandlerService } from './shared/services/http-dataHandler.service';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ShowTxtComponent } from './show-txt/show-txt.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HodDashboardComponent,
    StaffDashboardComponent,
    HeaderComponent,
    ShowTxtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpDataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

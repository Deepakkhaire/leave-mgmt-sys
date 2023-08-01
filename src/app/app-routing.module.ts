import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { AuthGuard } from './auth.guard';
import { ShowTxtComponent } from './show-txt/show-txt.component';

const routes: Routes = [

  { path: '', component: ShowTxtComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: RegistrationComponent },
  { path: 'hod/dashboard/:id', component: HodDashboardComponent, canActivate: [AuthGuard], },
  { path: 'staff/dashboard/:id', component: StaffDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

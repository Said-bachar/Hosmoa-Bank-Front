import { RechargeFormComponent } from './components/recharge-form/recharge-form.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddBenefeciaryComponent } from './components/add-benefeciary/add-benefeciary.component';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AfterAuthGuard } from './guards/after-auth.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AfterAuthGuard]},
  {path:'welcome',component:WelcomePageComponent,canActivate:[AfterAuthGuard]},
  {path:'transfer',component:TransferComponent,canActivate:[AuthGuard]},
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'recharge',component:RechargeFormComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ClientProfileComponent,canActivate:[AuthGuard]},
  {path:'addBenefeciary',component:AddBenefeciaryComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

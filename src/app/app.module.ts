import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientNavbarComponent } from './components/partials/client-navbar/client-navbar.component';

import { TransferComponent } from './components/transfer/transfer.component';

import { AccountsComponent } from './components/accounts/accounts.component';
import { ClientAgentComponent } from './components/client-agent/client-agent.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';

import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { RechargeFormComponent } from './components/recharge-form/recharge-form.component';
import { RechargesComponent } from './components/recharges/recharges.component';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AddBenefeciaryComponent } from './components/add-benefeciary/add-benefeciary.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientAuthService } from './services/auth/client-auth.service';
import { JwtInterceptor } from './services/interceptor/jwt.interceptor';

import { BalancePipe } from './pipes/balance.pipe';
import { ChangeKeyComponent } from './components/change-key/change-key.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientNavbarComponent,

    TransferComponent,
    TransferFormComponent,
    TransferHistoryComponent,

    AccountsComponent,
    ClientAgentComponent,
    ClientProfileComponent,
    RechargeFormComponent,
    RechargesComponent,
    WelcomePageComponent,
    AddBenefeciaryComponent,
    BalancePipe,
    ChangeKeyComponent,
    ChangePasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    ClientAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

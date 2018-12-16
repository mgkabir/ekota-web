import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot(
      {
        config:{tokenGetter:tokenGetter}
      }
    )
  ],
  providers: [
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

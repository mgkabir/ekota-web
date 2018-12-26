import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { TOKEN_NAME } from './auth.constant';

@Injectable()
export class UserService {
  jwtHelper: JwtHelperService = new JwtHelperService();
    
  constructor() { }

  login(accessToken: string) {
    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME);
  }

  isUserTenantAdmin(): boolean {
    const decodedToken = this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME));
    return decodedToken.authorities.some(el => el === 'ROLE_TENANT_ADMIN');
  }

  isUserSystemAdmin(): boolean {
    const decodedToken = this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME));
    return decodedToken.authorities.some(el => el === 'ROLE_SYS_ADMIN');
  }

  isLoggedIn(): boolean{
    return !this.jwtHelper.isTokenExpired(localStorage.getItem(TOKEN_NAME));
  }

}

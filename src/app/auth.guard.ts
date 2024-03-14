import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService){}

  canActivate(): boolean {
    /*localStorage.setItem("asd", "alma");
    localStorage.setItem("kerbgiu", "alma");
    localStorage.removeItem("asd");*/

    /*let token = localStorage.getItem("token");
    if(token){
      return true;
    }
    return false;*/
    return this.loginService.isLoggedIn();
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../Model/LoginUser';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl: string = 'https://dummyjson.com/auth/login';


  constructor(private http: HttpClient, private router: Router) {

   }

   login(user: LoginUser):Observable<any>{
      return this.http.post<any>(this.loginUrl, user, {headers: { 'Content-Type': 'application/json' }})
   }

   setToken(token: string){
    localStorage.setItem("token", token)
   }

   private getToken(): any{
    return localStorage.getItem("token")
   }

   isLoggedIn(){
      let token = localStorage.getItem("token");
      if(token){
        return true;
      }
      return false;
   }

   logout(){
    localStorage.clear()
    this.router.navigate(["login"]);
   }

}

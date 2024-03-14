import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emptyAngular';

  constructor(
    public loginService: LoginService,
    public route: ActivatedRoute
  ){
    console.log(route.snapshot.url)
  }

  alma(){
    this.loginService.isLoggedIn()
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../Model/LoginUser';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginUser = new LoginUser("atuny0", "9uQFF1Lh");

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn()) this.router.navigate(["home"])
    console.log(this.user)
    console.log(this.route.snapshot.url)
  }

  login(){
    console.log(this.user)
    this.loginService.login(this.user).subscribe(
      //next
      res=>{
        console.log(res);
        //alert("sikeres bejelentkezés");
        this.loginService.setToken(res.token)
        this.router.navigate(["home"]);
        //ha 200 státusz
      },
      //error
      err=>{
        console.error(err)
        alert("Hiba történt: " + err.error.message)
      },
      //complete
      ()=>{
        console.log("Mindenképp megtörténik")
      }
    )
  }
}

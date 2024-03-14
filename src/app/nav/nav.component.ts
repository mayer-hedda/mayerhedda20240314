import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()
  navButtons: any[] = [];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    for(let button of this.navButtons){
      console.log(button)
      let btn = {
        label: "Alma",
        path: "fruit"
      }
    }
  }

  navTo(path: string){
    this.router.navigate([path])
  }
  logout(){
    this.loginService.logout()
  }
}

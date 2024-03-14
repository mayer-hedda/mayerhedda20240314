import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { SwapiComponent } from './swapi/swapi.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "swapi",
    component: SwapiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user/:id",
    component: UserComponent
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  /*{
    path: '404',
    component: LoginComponent
  }*/
  
  {
    path: "**",
    redirectTo: "login",
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

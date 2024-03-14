import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData: User[] = []
  displayedColumns: string[] = ['name', 'email', 'website'];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.getUsers();

    /*this.usersData.push({
      id: 1,
      name: "Pista",
      email: "pityu@gmail.com",
      website: "pityu.net"
    },{
      id: 2,
      name: "Géza",
      email: "gezuka@gmail.com",
      website: "geza.hu"
    })*/
  }

  getUsers(){
    let url = "https://jsonplaceholder.typicode.com/users/";
    this.http.get<User[]>(url).subscribe(
      //next
      res => this.usersData = res,
      //err
      err =>{

        if(err.status == 404)
          alert("Az oldal nem található: " + err.message)
        else{
          alert("Hiba történt" + err.message)
        }
        console.error(err)
      }
      //complete
    )
  }

  /*createTable(res: User[]){

  }*/

}

type User = {
  id: number,
  name: string,
  email: string,
  website: string
}

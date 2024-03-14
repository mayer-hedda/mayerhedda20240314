import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  isVisible: boolean = true;

  numbers: number[] = [1, 2, 3];
  formValues: Product = {
    name: "", quantity: 0, color: ""
  };


  products: Product[] = [
    {name: "Szilva", quantity: 12, color: "Lila"},
    {name: "Alma", quantity: 1 },
    {name: "Körte", quantity: 20, color: "Sárga"},
  ];
  products2: any[] = [
    1,
    "alma",
    {name: "krumpli", count: 1}

  ];

  ngOnInit(): void {

    /*let arr = this.products.filter( element => element.quantity > 10);
    console.log(arr)*/

    let arr2 = this.products.filter( element => element != this.products[1]);
    console.log(arr2)

    for(let p of this.products){
      console.log(p)
    }

    for(let num in this.numbers){
      console.log(num)
    }
  }


  delete(element: {name: string, quantity?: number, color?: string}){
    const index = this.products.findIndex((product) => {
      return product === element;
    });
    
    this.products.splice(index, 1);
    
  }

  add(){
    this.products.push(this.formValues);
  }

  /*logout(){
    this.loginService.logout()
  }*/
}

type Product = 
{
  name: string,
  quantity?: number,
  color?: string
}
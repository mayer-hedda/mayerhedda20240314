import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  url: string = "https://swapi.dev/api/people";

  dataLength: number = 0;
  pageIndex: number = 0;

  dataSource: SwapiPerson[] = [
   /* {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    hair_color: "blond"
  },
  {
    name: "C-3PO", 
    height: 167, 
    mass: 75, 
    hair_color: "n/a",
  }*/

]
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color'];

  ngOnInit(): void {
    this.getSwapiPeople().subscribe(
      res=>{
        //let result: SwapiPerson[] = res.results as SwapiPerson[];
        this.dataSource = res.results;
        this.dataLength = res.count;
      },
    )
  }

  //Ezt Servicen szokás megcsinálni
  getSwapiPeople(){
    return this.http.get<SwapiPersonResponse>(this.url)
  }

  handlePageEvent(event: any){
    console.log(event.pageIndex);

    //getPeopleByPage
  }

  getPeopleByPage(){
    //"https://swapi.dev/api/people?page=szám"
  }

}


type SwapiPerson = {
  name: string, 
  height: number, 
  mass: number, 
  hair_color: string
}

type SwapiPersonResponse = {
  count: number,
  next: string,
  previous: string,
  results: SwapiPerson[]
}


import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export class City {
  constructor(
    public ID: number,
    public Name: string,
    public CountryCode: string,
    public District: string,
    public Info: string
  ) {
  }
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  columnsToDisplay = ['ID', 'Name', 'CountryCode', 'District', 'Info'];
  cities: City[];
  cities2 = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private httpClient: HttpClient
    
  ) {}

  ngOnInit(): void {
    this.getCities();
  }

  
  getCities() {
    this.httpClient.get<any>('http://localhost:1337/').subscribe(
      response => {
        console.log(response);
        this.cities = response;
        this.cities2 = new MatTableDataSource<any>(this.cities);
        this.cities2.paginator = this.paginator;
      }
    );
  }

  ngAfterViewInit(): void {
    this.cities2.paginator = this.paginator;
  }
}

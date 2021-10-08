import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export class Country {
  constructor(
    public Code: string,
    public Name: string,
    public Capital: number,
    public Code2: string,
  ) {
  }
}

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Country[] = [];
  columnsToDisplay = ['Code', 'Name', 'Capital', 'Code2'];
  countries2 = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCountries();
  } 

  getCountries() {
    this.httpClient.get<any>('http://localhost:1339/').subscribe(
      response => {
        console.log(response);
        this.countries = response;
        this.countries2 = new MatTableDataSource<any>(this.countries);
        this.countries2.paginator = this.paginator;
      }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export class Country {
  constructor(
    public Code: string,
    public Name: string
  ) {
  }
}


@Component({
  selector: 'app-country-city',
  templateUrl: './country-city.component.html',
  styleUrls: ['./country-city.component.css']
})
export class CountryCityComponent implements OnInit {

  countries: Country[] = [];
  columnsToDisplay = ['Code', 'Name'];
  cities3 = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.httpClient.get<any>('http://localhost:1341/').subscribe(
      response => {
        console.log(response);
        this.countries = response;
        this.cities3 = new MatTableDataSource<any>(this.countries);
        this.cities3.paginator = this.paginator;
      }
    );
  }


}

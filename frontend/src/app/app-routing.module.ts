import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { CountryCityComponent } from './country-city/country-city.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country', component: CountryComponent },
  { path: 'city', component: CityComponent },
  { path: 'country-city', component: CountryCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, CountryComponent, CityComponent, CountryCityComponent];
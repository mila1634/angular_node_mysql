import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCityComponent } from './country-city.component';

describe('CountryCityComponent', () => {
  let component: CountryCityComponent;
  let fixture: ComponentFixture<CountryCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

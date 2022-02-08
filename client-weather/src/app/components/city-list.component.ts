import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities = [ "Singapore","Kuala Lumpur","Saigon","Bangkok",
            "London", "Tokyo","San Fransisco"]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}

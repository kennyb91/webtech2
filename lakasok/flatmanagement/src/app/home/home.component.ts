import { LakasokService } from './../lakas.service';
import { Component, OnInit } from '@angular/core';
import {Lakas} from '../lakas';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LakasokService]
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }

}

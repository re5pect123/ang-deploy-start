import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products: any[] = [
    {
      "productId": 2,
      "productName":"Garden Cart"
    }
  ]

  constructor( private _http: HttpClient) { 


  }

  ngOnInit() { }


  sendGetRequest(){
    console.log("SEND");


  }


}

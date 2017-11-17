import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { HttpClient } from 'selenium-webdriver/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { TableService } from "app/table/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[TableService]
})
export class TableComponent implements OnInit {

  products: any[] = [
    {
      "productId": 2,
      "productName":"Garden Cart"
    }
  ]

  constructor(private http: Http, private tableService: TableService) { 
  }
  getResult: string;
  
  DataArray: any = [];

  /*  sendForFind(find:string) {
    console.log(find);

    this.http.get('http://localhost:8000/getclient/' + find)
            .subscribe(data => {
                this.getResult = data['_body'];
                console.log(data['_body']);
              });


  }*/

sendForFind(find:string) {
    console.log(find);

     this.tableService.sendForFind(find).subscribe(
      data => {
        this.DataArray = data;
        console.log(data);
      });

}

    loadTableData(){
    this.tableService.loadTableData().subscribe(
      data => {
        this.DataArray = data;
        console.log(data);
      });
  }

      onNameClick(find: string){
    this.tableService.onNameClick(find).subscribe(
      data => {
        this.DataArray = data;
        console.log(data);
      });
  }

  ngOnInit() { }


  sendGetRequest(){
    console.log("SEND");
  }


}

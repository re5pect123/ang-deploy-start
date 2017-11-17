import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {

constructor(private http: Http) { }

getResult: string;
postResult: string;

loadTableData(){
        console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getAll')
        .map(res => res.json());
    }

sendForFind(find:string) {
    console.log(find);
    console.log("Usao u service, saljemo get requst! ");
        return this.http.get('http://localhost:8000/getclient/' + find)
        .map(res => res.json());
  }

  onNameClick(find: string){
      console.log("Kliknuo si na ime");
      return this.http.get('http://localhost:8000/getclient/' + find)
        .map(res => res.json());
  }

}
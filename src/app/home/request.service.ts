import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {
    headers: any;

    constructor(private http: Http) { }

    getResult: string;
    postResult: string;

    sendGetRequest(){
        const headers = new Headers();
        console.log("Usao u service, saljemo get requst! ");
              return this.http.get('http://localhost:8000/getAll')
              .map(res => res.json());
    }

    sendPostRequest() {
        const headers1 = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers1 });
        console.log("NOVA METODA")
        this.http.post('http://localhost:8000/upload', options).map(response => response.json())
          .subscribe(
            () => {console.log('Success')}
          );


   /*      const headers = new Headers();
        console.log("Usao u service, saljemo post request");
        this.headers.append("Content-Type", 'application/json');

        this.http.post('http://localhost:8000/upload',{headers})
             .subscribe(data => {
                this.postResult = data['_body'];
                console.log(data['_body']);
              });*/
    }
}
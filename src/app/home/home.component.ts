import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { Observable } from "rxjs/Rx";
import { UploadComponent} from "app/home/homeUpload.component";
import 'rxjs/Rx';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LOGOMID = 'assets/images/deploylogo.png'

  constructor() { }

  ngOnInit() { }

}

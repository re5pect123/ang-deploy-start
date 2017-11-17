import { Component, EventEmitter } from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { RequestService } from "app/home/request.service";
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'upload',
  templateUrl: 'app-home.component.html',
  providers:[RequestService]
})
export class UploadComponent {
  createUserService: any;
  options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  DataArray: any = [];

  constructor(private requestService: RequestService, private http: Http) { 
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>(); 
    this.humanizeBytes = humanizeBytes;
  }

  loadTableData(){
    this.requestService.sendGetRequest().subscribe(
      data => {
        this.DataArray = data;
        console.log(data);
      });
      
  }

  sendGetRequest(){
    console.log("Usao u metod za slanje GET requsta --> idemo u service!")
    this.requestService.sendGetRequest()
    .subscribe(
        data => this.getResult = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
    );
    
    this.requestService.sendGetRequest();
    this.getResult = this.requestService.getResult;
  }

  

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') { 
    } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') { 
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
  }

  startUpload(): void {

    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://localhost:8000/upload',
      method: 'POST',
      data: { foo: 'bar' }
      
    };
  //  this.uploadInput.emit(event);
        const headers1 = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers1 });
        console.log("NOVA METODA")
        this.http.post('http://localhost:8000/upload', this.uploadInput.emit(event), options).map(response => response.json())
          .subscribe(
            () => {console.log('Success')}
          );
  }

    getResult: string;
    postResult: string;


  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }
  
  sendPostRequest(){
    console.log("Usao u metod za slanje post requesta --> idemo u service!");
    this.requestService.sendPostRequest();
    this.postResult = this.requestService.postResult;
    
  }
}
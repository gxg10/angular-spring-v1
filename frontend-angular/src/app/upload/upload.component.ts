import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL = 'http://localhost:8080/uploadFile';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  mesaj_upload;
  filestoUpload: Array<File> = [];

  constructor(private http: HttpClient,
              private el: ElementRef) { }

  ngOnInit() {
  }

  upload() {
    // locate the file element meant for the file upload.
        const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
        const files: Array<File> = this.filestoUpload;
        console.log(files);
    // get the total amount of files attached to the file input.
        const fileCount: number = inputEl.files.length;
    // create a new fromdata instance
        const formData = new FormData();
    // check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            // append the key name 'photo' with the first file in the element
            for (let i = 0; i < fileCount; i++) {
                formData.append('txtFileFilter', inputEl.files.item(i));
            }
            // call the angular http method
            this.http
                .post(URL, formData).pipe(map((res:any) => res)).subscribe(
                 (res) => {
                    this.mesaj_upload = res;
                    return console.log('files', res);
                 });
            this.filestoUpload = undefined;
          }
       }

}

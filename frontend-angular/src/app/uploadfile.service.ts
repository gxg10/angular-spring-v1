import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', '/post', formdata);

    return this.http.post.;
  }
}

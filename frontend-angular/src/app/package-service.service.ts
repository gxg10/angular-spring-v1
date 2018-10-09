import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {

  apiUrl = 'http://localhost:8080/questions';

  // private blogs: Package[] = [];

  constructor(private http: HttpClient) { }

  getPackages(): Observable<any> {
    return this.http.get(this.apiUrl);

  }

  postQuestion(question: Object): Observable<Object> {
    return this.http.post(this.apiUrl, question);
  }

  deleteQuestions(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {responseType: 'text'});
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {

  apiUrl = 'http://localhost:8080/questions';

  // private blogs: Package[] = [];

  constructor(private http: HttpClient) { }

  getPackages() {
    return this.http.get(this.apiUrl);
  }
}

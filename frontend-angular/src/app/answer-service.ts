import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './answer-model';

@Injectable({
  providedIn: 'root'
})

export class AnswerService {

    apiUrl = 'http://localhost:8080/questions';

    constructor(private http: HttpClient) {

    }

    getAnswers(questionId: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${questionId}/answers`);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Question } from '../question-model';
import { PackageServiceService } from '../package-service.service';
import { Observable } from 'rxjs';
import { AnswerService } from '../answer-service';
import { Answer } from '../answer-model';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-individualquestion',
  templateUrl: './individualquestion.component.html',
  styleUrls: ['./individualquestion.component.css']
})
export class IndividualquestionComponent implements OnInit {

  id: number;
  question: Question;
  answer: Observable<Answer[]>;

  constructor(private route: ActivatedRoute,
              private questionService: PackageServiceService,
              private answerService: AnswerService) { }

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // console.log(this.id);
        }
      );
      this.getSingleQuestion(this.id);
      this.getAnswersForQuestion(this.id);
      console.log('this answer is '+ this.answer);
  }

  getSingleQuestion(id: number) {
      this.questionService.getQuestion(id).subscribe(
        (data) => {
          this.question = data;
        }
      );
  }

  getAnswersForQuestion(id: number) {
      this.answerService.getAnswers(id).subscribe(
        (data) => {
          console.log(data);
          this.answer = data;
        }
      );
  }

}

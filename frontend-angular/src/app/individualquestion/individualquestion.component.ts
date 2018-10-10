import { Component, OnInit, Output } from '@angular/core';
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
  answer: Answer[];
  add = false;
  newAns: Answer = new Answer();

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
  this.answerService.getAnswers(id)
  .subscribe(
    (data) => {
      // console.log(data);
      this.answer = data;
      console.log(this.answer);
    }
  );
}

addAnswer() {
    this.add = !this.add;
    console.log(this.add);
}

onSubmit() {
  console.log(this.id, this.newAns);
  this.saveNewAnswer();
}

saveNewAnswer() {
  this.answerService.postAnswer(this.id, this.newAns)
  .subscribe(
    data => console.log(data),
    error => console.log(error));
    this.newAns = new Answer();
}

}

import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question-model';
import { PackageServiceService } from '../package-service.service';
import { AnswerService } from '../answer-service';
import { Answer } from '../answer-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  @Input() question: Question;
  answer: Observable<Answer>;

  constructor(private service: PackageServiceService,
              private answerService: AnswerService) { }

  ngOnInit() {
    this.getAns();
  }

  deleteQuestion() {
      this.service.deleteQuestions(this.question.id)
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }

  getAns() {
    this.answerService.getAnswers(this.question.id).subscribe(
      (data) => {
        console.log(data);
        this.answer = data;
      }
    );
  }

}

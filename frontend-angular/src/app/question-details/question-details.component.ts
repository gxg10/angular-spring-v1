import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question-model';
import { PackageServiceService } from '../package-service.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  @Input() question: Question;

  constructor(private service: PackageServiceService) { }

  ngOnInit() {
  }

  deleteQuestion() {
      this.service.deleteQuestions(this.question.id)
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }

}

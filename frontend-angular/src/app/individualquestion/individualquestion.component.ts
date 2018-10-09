import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Question } from '../question-model';
import { PackageServiceService } from '../package-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-individualquestion',
  templateUrl: './individualquestion.component.html',
  styleUrls: ['./individualquestion.component.css']
})
export class IndividualquestionComponent implements OnInit {

  id: number;
  question: Question;

  constructor(private route: ActivatedRoute,
              private questionService: PackageServiceService) { }

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // console.log(this.id);
        }
      );
      this.getSingleQuestion(this.id);
      // console.log(this.question);
  }

  getSingleQuestion(id: number) {
      this.questionService.getQuestion(id).subscribe(
        (data) => {
          this.question = data;
        }
      );
  }

}

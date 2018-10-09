import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question-model';
import { PackageServiceService } from '../package-service.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Observable<Question[]>;

  constructor(private packageService: PackageServiceService) { }

  ngOnInit() {
    this.getQ();
  }

  getQ() {
    this.packageService.getPackages().subscribe(
      (data) => {
        console.log(data);
        this.questions = data;
      }
    );
  }

}

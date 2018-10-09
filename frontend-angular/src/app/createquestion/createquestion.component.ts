import { Component, OnInit } from '@angular/core';
import { PackageServiceService } from '../package-service.service';
import { Question } from '../question-model';

@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css']
})
export class CreatequestionComponent implements OnInit {

  question: Question = new Question();

  constructor(private packageService: PackageServiceService) { }

  ngOnInit() {
  }

  

  save() {
    this.packageService.postQuestion(this.question)
    .subscribe(data=> console.log(data), error => console.log(error));
    this.question = new Question();
  }

  onSubmit() {
    console.log(this.question);
    this.save();
  }

}

import { Component, OnInit } from '@angular/core';
import { PackageServiceService } from './package-service.service';
import { Observable } from 'rxjs';
import { Question } from './question-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'JavaSampleApproach';
  description = 'Angular-SpringBoot';

  question: Question = new Question();

  constructor(private packageService: PackageServiceService) {

  }

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

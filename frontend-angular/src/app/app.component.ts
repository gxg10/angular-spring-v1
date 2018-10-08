import { Component, OnInit } from '@angular/core';
import { PackageServiceService } from './package-service.service';
import { Package } from './packages';
import { Question } from './question-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';

  blog: Package[] = [];
  questions: Question[] = [];

  constructor(private packService: PackageServiceService) {

  }

  ngOnInit() {
    this.getP();
  }

  getP() {
    this.packService.getPackages().subscribe(
      (questions: Question[]) => {
        this.questions = questions;
        console.log(this.questions);
      }
    );
  }


  // getP() {
  //   this.packService.getPackages().subscribe(
  //     (data:{}) => {
  //       console.log(data);
  //       this.blog = data[0];
  //       console.log(this.blog);
  //     });
  // }

}

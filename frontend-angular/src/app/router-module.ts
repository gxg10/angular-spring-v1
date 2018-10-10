import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { CreatequestionComponent } from './createquestion/createquestion.component';
import { IndividualquestionComponent } from './individualquestion/individualquestion.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path: '', redirectTo: 'question', pathMatch: 'full'},
  {path: 'question', component: QuestionListComponent},
  {path: 'question/:id', component: IndividualquestionComponent},
  {path: 'create', component: CreatequestionComponent},
  {path: 'upload', component: UploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class RouterModuleApp {}

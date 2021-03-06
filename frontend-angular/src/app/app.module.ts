import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PackageServiceService } from './package-service.service';
import { CreatequestionComponent } from './createquestion/createquestion.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { RouterModuleApp } from './router-module';
import { HeaderComponent } from './header/header.component';
import { IndividualquestionComponent } from './individualquestion/individualquestion.component';
import { UploadComponent } from './upload/upload.component';
import { UploadfileService } from './uploadfile.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatequestionComponent,
    QuestionListComponent,
    QuestionDetailsComponent,
    HeaderComponent,
    IndividualquestionComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModuleApp
  ],
  providers: [PackageServiceService, UploadfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

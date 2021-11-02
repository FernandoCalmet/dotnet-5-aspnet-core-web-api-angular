import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { StudentComponent } from './student/student.component';
import { StudentShowComponent } from './student/student-show/student-show.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentShowComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

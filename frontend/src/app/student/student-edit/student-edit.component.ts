import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  
  @Input() student: any;
  StudentId: string = '';
  FullName: string = '';
  Class: string = '';

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.StudentId = this.student.StudentId;
    this.FullName = this.student.FullName;
    this.Class = this.student.Class;
  }

  addStudent() {
    var val = {
      StudentId: this.StudentId,
      FullName: this.FullName,
      Class: this.Class,
    };
    this.service.addStudent(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateStudent() {
    var val = {
      StudentId: this.StudentId,
      FullName: this.FullName,
      Class: this.Class,
    };
    this.service.updateStudent(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}

import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  

  constructor(private service : StudentService, private router : Router) { }

  ngOnInit(): void {
  }

  createStudent():void {
    this.service.createStudent(this.student).subscribe(
      data => { console.log(data);}, 
      error => {console.log(error)}
    );
    this.goToStudentsList();
  }

  goToStudentsList():void {
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.createStudent();
  }


}

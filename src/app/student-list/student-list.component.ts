import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  students!: Student[];

  constructor(private service : StudentService, private router : Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.service.getStudentsList().subscribe(
        data => this.students = data,
    )
  }

  updateStudent(student: Student){
    const studentId = student ? student.id : null;
    this.router.navigate(['update-student', {id : studentId}]);
  }

  deleteStudent(id : number){
    this.service.deleteStudent(id).subscribe(
      (data) => {console.log(data); },
      (error)=> {console.log(error);}
    )
    this.goToList();
  }

  viewStudent(student : Student) {
    const studentId = student ? student.id : null;
    this.router.navigate(['student-details', {id : studentId}]);
  }

  goToList() {
    this.router.navigate(['students']);
  }

}

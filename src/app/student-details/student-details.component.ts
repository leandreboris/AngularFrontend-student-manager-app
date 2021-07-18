import { StudentService } from './../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id!: number;
  student!: Student;

  constructor(private route : ActivatedRoute, private service : StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.student = new Student();
    this.service.getStudent(this.id).subscribe(
      data => {this.student = data}, 
      error => {console.log(error)}
    )
  }

}

import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id!: number;
  student : Student = new Student();
  constructor(private service : StudentService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getStudent(this.id).subscribe(
      data => {this.student = data;},
      error => {console.log(error);}
    )
  }

 
  goToList() {
    this.router.navigate(['students']);
  }

  onSubmit(){
    this.service.updateStudent(this.id, this.student).subscribe(
      data => {this.goToList();}, 
      error => {console.log(error);}
    )
    this.goToList();
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getUrl : string = "http://localhost:8080/api/v1/students/";
  postUrl : String =  "http://localhost:8080/api/v1/add/";
  updateUrl : String = "http://localhost:8080/api/v1/edit";
  deleteUrl : string = "http://localhost:8080/api/v1/delete";
  

  constructor(private http: HttpClient ) { }

  getStudentsList() : Observable<Student[]> {
    return this.http.get<Student[]>(`${this.getUrl}`);
  }

  createStudent(student : Student) : Observable<Object> {
    return this.http.post(`${this.postUrl}`, student);
  }
  getStudent(id : number) : Observable<Student>{
    return this.http.get<Student>(`${this.getUrl}/${id}`);
  }

  updateStudent(id : number, student : Student) : Observable<Object>{
    return this.http.put(`${this.updateUrl}/${id}`, student);
  }

  deleteStudent(id : number): Observable<Object>{
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }


}

import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'students', component:StudentListComponent},
  {path:"", redirectTo:'students', pathMatch:'full'},
  {path : 'create-student', component:CreateStudentComponent},
  {path : 'update-student', component:UpdateStudentComponent},
  {path: 'student-details', component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

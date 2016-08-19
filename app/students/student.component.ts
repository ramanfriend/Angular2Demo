import {Component} from 'angular2/core';
import { FormBuilder, ControlGroup,Validators} from 'angular2/common';
import {student} from './student';
import {OnInit} from "angular2/core";


@Component({
    selector: 'student',
    templateUrl: 'app/students/student.html'
   
})
export class StudentComponent implements OnInit { 
 myForm: ControlGroup;
 constructor(private _formBuilder:FormBuilder){}

  onSubmit(value){
     
   console.log(value);
   
  }
  ngOnInit():any {
      this.myForm  = this._formBuilder.group({
         'studentname':['',Validators.required],
         'parentname':['',Validators.required],
         'studentclass':['',Validators.required],
         'rollno':['',Validators.required],
         'phone':['',Validators.required],
         'address':['',Validators.required]
      });
  }
 }
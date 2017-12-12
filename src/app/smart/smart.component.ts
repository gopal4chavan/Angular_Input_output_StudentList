import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent {  

  selectedStudent:Student;
  list:Student[] = [new Student(1,"Mahek"),new Student(2,"Keshave"),new Student(3,"Ravi")]

  Handler(student){    
    this.selectedStudent = student;  
  }
}

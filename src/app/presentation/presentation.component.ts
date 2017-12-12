import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Student} from '../student';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent{

  // Takes the list of students from smart component
  @Input() StudentList : Student[];

  // When user click on any student using @Output we emit event to send data to smart component
  @Output() emitStudent = new EventEmitter<Student>()
  
  Meth(student:Student){
    debugger;
    this.emitStudent.emit(student);
  }
}

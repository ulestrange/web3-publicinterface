import { Component, OnInit, Input } from '@angular/core';
import { Course} from '../model/course.model'

@Component({
  selector: 'app-course-row',
  templateUrl: './course-row.component.html',
  styleUrls: ['./course-row.component.css']
})
export class CourseRowComponent implements OnInit {

  @Input() course: Course;

  constructor() {
   // console.log("course is ", this.course.name );
   }

  ngOnInit() {
  }

}

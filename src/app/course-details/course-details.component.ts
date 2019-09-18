import { Component, OnInit, Input } from '@angular/core';
import { Course} from '../model/course.model'

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

 @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}



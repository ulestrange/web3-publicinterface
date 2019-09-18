import { Component, OnInit, Input, 
  EventEmitter, Output } from '@angular/core';
import { Course} from '../model/course.model'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  /**
   * @input courseList - the array of courses from the tag
   */
  @Input() courseList: Course[];

 /**
   * @output onCourseSelected - outputs the course which has been selected
   */
  @Output() onCourseSelected: EventEmitter<Course>;

  private currentCourse: Course;

  constructor() {

    this.onCourseSelected = new EventEmitter();
  }

   clicked(course: Course): void {
    this.currentCourse = course;
    this.onCourseSelected.emit(course);
  }

  isSelected(course: Course): boolean {
    if (!course || !this.currentCourse) {
      return false;
    }  
    return course.code === this.currentCourse.code;
  }

  ngOnInit() {

  }

}

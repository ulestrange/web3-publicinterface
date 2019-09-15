import { Component } from '@angular/core';
import { Course } from './model/course.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coursarooney';

  courses : Course[];

  constructor()
  {

//for now we are defining a fixed list of courses, in future we will
// be reading these in from an API.

    this.courses  = [
      new Course(
        'C001',
        'Yoga with Una',
        10,
        ['Yoga', 'Fitness'],
        'Yoga for the faint hearted',
        ""),
new Course(
        'C002',
        'Cross-fit with Una',
        10,
        ['Cross-fit', 'Fitness'],
        'Get fit with cross fit',
        ""),
        new Course(
        'C003',
        'Step-aerobics with Una',
        10,
        ['aerobics', 'Fitness'],
        'Remember the 80s',
        "")
    ]   	  
  }

}

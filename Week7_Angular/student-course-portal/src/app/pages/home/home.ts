import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../../components/course-card/course-card';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CourseCard, NgFor, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  courses = [
    { id: 1, name: 'Angular', code: 'CS101', credits: 4 },
    { id: 2, name: 'React', code: 'CS102', credits: 3 },
    { id: 3, name: 'Java', code: 'CS103', credits: 4 },
    { id: 4, name: 'Spring Boot', code: 'CS104', credits: 4 },
    { id: 5, name: 'SQL', code: 'CS105', credits: 2 }
  ];

  selectedCourseId = 0;

  ngOnInit(): void {
    this.availableCourses = 12;
    console.log('HomeComponent initialized - courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

}
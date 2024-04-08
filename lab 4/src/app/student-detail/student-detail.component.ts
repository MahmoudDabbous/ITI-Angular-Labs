import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css',
})
export class StudentDetailComponent {
  id: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}

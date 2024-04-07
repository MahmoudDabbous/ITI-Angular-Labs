import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    FormComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  students: { name: string; age: string }[] = [];
  addStudent(newStudent: { name: string; age: string }) {
    this.students.push(newStudent);
  }
}

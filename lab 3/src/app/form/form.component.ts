import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule],
})
export class FormComponent {
  stdName = '';
  age = '';
  students: { name: string; age: string }[] = [];
  @Output() submitEvent = new EventEmitter<{ name: string; age: string }>();

  submit() {
    const newStudent = { name: this.stdName, age: this.age };
    this.students.push(newStudent);
    this.stdName = '';
    this.age = '';
    this.submitEvent.emit(newStudent);
  }
}

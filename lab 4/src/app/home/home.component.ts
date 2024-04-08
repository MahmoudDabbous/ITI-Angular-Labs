import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  id: number;
  name: string;
  age: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  students: Student[] = [];
  name: string = '';
  age: string = '';
  @Output('RegistrationEvent') Register = new EventEmitter<Student>();
  SendData() {
    this.Register.emit({
      id: this.students.length + 1,
      name: this.name,
      age: this.age,
    });
    this.name = '';
    this.age = '';
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.scss',
})
export class AddItem {
  newTask = new FormControl('');
  @Output() addTask = new EventEmitter<string>();

  submitTodo() {
    const task = this.newTask.value?.trim();
    if (task) {
      this.addTask.emit(task);
      this.newTask.reset();
    }
  }
}

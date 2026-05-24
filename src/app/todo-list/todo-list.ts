import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  @Input() todoList: string[] = [];
  @Output() removeTask = new EventEmitter<number>();
  deleteTask(index: number) {
    this.removeTask.emit(index);
  }
}

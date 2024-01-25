import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: string[] = [];
  newItem: string = '';

  addTodo() {
    if (this.newItem.trim() !== '') {
      this.todoItems.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeTodo(index: number) {
    this.todoItems.splice(index, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todoList: Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList()
      .subscribe((response) => {
        this.todoList = response;
      });
  }

  private addTodo(todo) {
    return true;
  }
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
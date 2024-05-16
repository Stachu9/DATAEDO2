import { Component } from '@angular/core';
import {TodoService, Todo} from "./todo.service";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(todoService: TodoService) {
    todoService.getTodos("pending", 2, 1).pipe(map(
      todos => todos.length === 0 ? null : todos[0]
    )).subscribe((todo: Todo | null) => console.log(todo)
    );
  }
}

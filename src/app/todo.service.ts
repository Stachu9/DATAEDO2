import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Todo {
  id: number,
  user_id: number,
  title: string,
  due_on: string,
  status: "pending" | "complete"
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  private readonly todoURL: string = 'https://gorest.co.in/public/v2/todos';

  getTodos(status: "pending" | "completed", page: number, perPage: number): Observable<Array<Todo>> {
    return this.httpClient.get<Array<Todo>>(this.todoURL, {params: {status, page, per_page: perPage}});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { IndTaskInterface } from '../taskbyid/IndTask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpCli: HttpClient, private route: ActivatedRoute) { }

  getTasksServ(): Observable<string[]>{
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpCli.get<string[]>('http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos', httpHead);
  }

  getTaskByIdServ(id): Observable<IndTaskInterface>{
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpCli.get<IndTaskInterface>('http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos/' + id, httpHead);
  }

  postTask(todoForm): Observable<string>{
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpCli.post<string>('http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos', todoForm, httpHead);
  }

  updateTask(todoForm): Observable<string>{
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpCli.put<string>('http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos', todoForm, httpHead);
  }

  deleteTodos(todoForm): Observable<string>{
    let url:string = 'http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos/'+todoForm;
    const options: object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    }; 
    return this.httpCli.delete<string>(url, options);
  }
}

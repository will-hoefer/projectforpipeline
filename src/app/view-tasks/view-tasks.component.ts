import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ViewService } from '../services/view.service';
import { DeleteService } from '../services/delete.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  taskInfo;
  allTasksArray;
  theCheckbox = false;
  marked = false;
  todos = new FormGroup({
    title: new FormControl
  });
 
  constructor(private route: ActivatedRoute, private view: ViewService, private del:DeleteService) { }
  
  
  viewTodosEC2(){
    this.view.viewTodos().subscribe(
      response => {
        console.log(response);
        this.allTasksArray= response;
      }
    )
  }
  
  viewTodosByIdEC2(todoSub: FormGroup){
    let form= todoSub.get("title").value;
    this.view.viewTodosById(form).subscribe(
      response => {
        this.taskInfo = response
        console.log(this.taskInfo);
        return this.taskInfo;
      }
    )
  }
  deleteTodosEC2(todoSub: FormGroup){
    let form= todoSub.get("title").value;
      this.del.deleteTodos(form).subscribe(
        response => {
          console.log('success');
        }
      )
    }
    toggleVisibility(e){
      this.marked= e.target.checked;
    }
  
  ngOnInit(): void {
    
  }

}

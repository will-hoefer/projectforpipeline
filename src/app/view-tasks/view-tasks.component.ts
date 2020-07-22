import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  taskInfo;
  allTasksArray;
  searchString: string;
  theCheckbox = false;
  marked = false;
  inputError = '';
  todos = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private view: TasksService) { }

  getTasks(){
    this.view.getTasksServ().subscribe(
      response => {
        console.log(response);
        this.allTasksArray= response;
      }
    )
  }

  deleteTaskById(todoSub: FormGroup){
    const form = todoSub.get('id').value;
    this.view.deleteTodos(form).subscribe(
        response => {
          console.log('success');
          window.location.reload(); // reloads the page so the changes are display
        },
        error => {
          console.log(error);
          if (error.status === 0 && error.statusText === 'Unknown Error') {

          }
          else if (error.status === 400) {
            this.inputError = 'You must enter a number for the Task Id';
          }
          else {
            this.inputError = error.error.error;
          }
        }
      );
  }

  toggleVisibility(e){
      this.marked = e.target.checked;
    }

  ngOnInit(): void {
    this.getTasks();
  }

}

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
    let counter = 0;
    // for (let i = 0; i < this.allTasksArray.length; i++){
      // if (this.allTasksArray[i].id === form){
    for (const item of this.allTasksArray){
      if (item.id === form){
        counter++;
      }
    }
    if (counter > 0){
      this.view.deleteTodos(form).subscribe(
        response => {
          this.inputError = `You have successfully deleted Task #:  ${form}`;
          setTimeout(() => { window.location.reload(); }, 1000);
        },
        error => {
            console.log(error);
            // this.inputError = 'You must enter a number for the Task Id';
            this.inputError = error.error.error;
        }
      );
    }
    else{
      console.log(`Input error:  No existing task with id:  ${form}`);
      this.inputError = `There is no existing task with id ${form}`;
    }
  }

  toggleVisibility(e){
      this.marked = e.target.checked;
    }

  ngOnInit(): void {
    this.getTasks();
  }

}

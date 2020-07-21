import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IndTaskInterface } from '../taskbyid/IndTask';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.css'],
})
export class SelectTaskComponent implements OnInit {
  taskInfo: IndTaskInterface;
  taskInfoObj: IndTaskInterface;
  taskId = 'noId';
  test = '';
  buttonClicked = false;

  constructor(private route: ActivatedRoute, private task: TasksService) { }

  getTaskById(): void{
    this.task.getTaskByIdServ(this.test).subscribe(
      response => {
        //console.log(response);
        this.taskInfo = response;
        console.log(this.taskInfo);
        this.buttonClicked = true;
      }
    );
  }

  updateTask(todoSub: FormGroup){
    const form = JSON.stringify(todoSub.value);
    this.task.postTask(form).subscribe(
      response => {
        console.log('success');
        //this.successtext = true;
      }
    );
  }

  ngOnInit(): void {

  }

}

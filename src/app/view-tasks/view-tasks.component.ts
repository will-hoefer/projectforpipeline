import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { IndTaskInterface } from '../taskbyid/IndTask';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  taskInfo;
  allTasksArray:IndTaskInterface[];
  filteredAllTasksArray: IndTaskInterface[];
 /*  theCheckbox = false; */
  marked = false;
  attrListFilter = "This is the default title";
  get listFilter(): string {
    return this.attrListFilter;
  }
  set listFilter(temp:string) {
    this.attrListFilter = temp;
    this.filteredAllTasksArray = this.attrListFilter ?
    this.performFilter(this.attrListFilter) : this.allTasksArray;
  }
  performFilter(filterBy: string): IndTaskInterface[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.allTasksArray.filter((todoList:IndTaskInterface) => 
    todoList.title.toLocaleLowerCase().indexOf(filterBy) !==-1);
  }
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

  getTaskById(todoSub: FormGroup){
    const taskid = todoSub.get('id').value;
    this.view.getTaskByIdServ(taskid).subscribe(
      response => {
        //console.log(response);
        this.taskInfo = response;
        console.log(this.taskInfo);
      }
    );
  }

  deleteTaskById(todoSub: FormGroup){
    const form = todoSub.get('id').value;
    this.view.deleteTodos(form).subscribe(
        response => {
          console.log('success');
          window.location.reload(); // reloads the page so the changes are display
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

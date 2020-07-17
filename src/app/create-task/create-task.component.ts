import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UpdateService } from '../services/update.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  todos = new FormGroup({
    title: new FormControl
  });

  constructor(private route: ActivatedRoute, private update: UpdateService) { }

  createTodosEC2(todoSub: FormGroup){
    //Stringifying values, due to the request body content-type being a JSON
    let form= JSON.stringify(todoSub.value)
    this.update.createTodos(form).subscribe(
      response => {
        console.log('success');
      }
    )
  }

  ngOnInit(): void {
  }

}

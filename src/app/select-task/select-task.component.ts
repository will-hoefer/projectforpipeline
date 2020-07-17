import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeleteService } from '../services/delete.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.css']
})
export class SelectTaskComponent implements OnInit {
  todos = new FormGroup({
    title: new FormControl
  });

  constructor(private route:ActivatedRoute, private del:DeleteService) { }
  
  deleteTodosEC2(todoSub: FormGroup){
    let form= todoSub.get("title").value;
      this.del.deleteTodos(form).subscribe(
        // response => {
        //   console.log('success');
        // }
      )
  
    }
  
  ngOnInit(): void {
  
  }

}

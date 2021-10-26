import {Component, OnInit} from '@angular/core';
import {Todo} from "../modeles/todo";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todolist-angular';
  public todoList: Array<Todo> = [
    {
      label: 'foo',
      at: new Date(),
      finished: true,
    }, {
      label: 'foo',
      at: new Date(),
      finished: false,
    }, {
      label: 'foobar',
      at: new Date(),
      finished: true,
    },
  ];

  public form = this.fb.array([
    this.fb.group({
        label: [''],
        at: [new Date()],
        finished: [false],
      }),
  ]);

  public constructor(
    private fb: FormBuilder,
    ) {
  }

  public ngOnInit(): void{
    this.form.setValue(this.todoList);
  }
  /*Autre façon pour multiplier une ligne
  public get todoList(): Array<string> {
    const arr: Array<string> = [];
    for (let i = 0; i <= 10; i++) {
      arr.push('item' + i);
    }
    return arr;
  }*/
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ab-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = {
    description: '',
    priority: Math.round(Math.random() * 2),
    dueDate: new Date(),
    state: Math.round(Math.random() * 2)
  };
  constructor(activatedRoute: ActivatedRoute) {
    this.task.description = activatedRoute.snapshot.params.id;
  }
  // default, high, tomorrow
  priorityColors = ['primary', 'accent', 'warn'];
  // pending, completed, inProgress ,discarded
  stateColors = ['primary', '', 'accent', 'warn'];
  ngOnInit() {}
}

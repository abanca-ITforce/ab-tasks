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
    dueDate: new Date(2019, 11, 5),
    state: 0
  };
  constructor(activatedRoute: ActivatedRoute) {
    this.task.description = activatedRoute.snapshot.params.id;
  }
  // default, high, tomorrow
  priorityColors = ['primary', 'accent', 'warn'];

  stateCommands = [
    { id: 0, name: 'Pending', color: 'primary' },
    { id: 1, name: 'Complete', color: '' },
    { id: 2, name: 'In Progress', color: 'primary' },
    { id: 3, name: 'Cancel', color: 'warn' }
  ];
  ngOnInit() {}
}

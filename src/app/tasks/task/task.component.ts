import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ab-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskDescription: string;
  constructor(activatedRoute: ActivatedRoute) {
    this.taskDescription = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {}
}

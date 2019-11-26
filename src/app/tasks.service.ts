import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskList;

  constructor() {
    const temp = localStorage.getItem('taskList');
    if (temp) {
      this.taskList = JSON.parse(temp);
    } else {
      this.taskList = [];
    }
  }

  getStates() {
    return [
      { id: 0, name: 'Pending', color: 'primary' },
      { id: 1, name: 'Complete', color: '' },
      { id: 2, name: 'In Progress', color: 'primary' },
      { id: 3, name: 'Cancel', color: 'warn' }
    ];
  }

  postTask(task) {
    this.taskList.push(task);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }
}

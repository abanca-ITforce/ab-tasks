import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'ab-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  taskForm = this.fb.group({
    description: [null, [Validators.required, Validators.minLength(3)]],
    dueDate: [null, [Validators.required]],
    state: [null, []],
    priority: ['default', Validators.required]
  });

  states = this.tasksService.getStates();
  constructor(private fb: FormBuilder, private tasksService: TasksService) {}

  onSubmit() {
    this.tasksService.postTask(this.taskForm.value);
  }
}

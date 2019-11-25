import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ab-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  taskForm = this.fb.group({
    description: [null, [Validators.required]],
    dueDate: [null, [Validators.required]],
    state: [null, []],
    priority: ['default', Validators.required]
  });

  states = [
    { id: 0, name: 'Pending', color: 'primary' },
    { id: 1, name: 'Complete', color: '' },
    { id: 2, name: 'In Progress', color: 'primary' },
    { id: 3, name: 'Cancel', color: 'warn' }
  ];
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert(JSON.stringify(this.taskForm.value));
  }
}

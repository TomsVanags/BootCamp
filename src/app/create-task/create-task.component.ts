//import { Component } from '@angular/core';

//@Component({
  //selector: 'app-create-task',
  //standalone: true,
  //imports: [],
  //templateUrl: './create-task.component.html',
  //styleUrl: './create-task.component.scss'
//})
//export class CreateTaskComponent {

//}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [DatePipe]
})
export class CreateTaskComponent implements OnInit {
  taskForm!: FormGroup;
  createdOnDisplay: string = '';

  constructor(private fb: FormBuilder, private datePipe: DatePipe ) {}

  ngOnInit(): void {
    const now = new Date();
    this.createdOnDisplay = this.datePipe.transform(now, 'yyyy-MM-dd HH:mm') || '';

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      createdOn: [{value: now, disabled: true}],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.getRawValue()
      console.log('Task:', this.taskForm.value);
      console.log(taskData)
      // var vel kko pievienot, ja vajag (funkciju)
    }
  }
}

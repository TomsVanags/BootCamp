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
      createdOn: [{value: now, disabled: true}, now.toISOString()],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.getRawValue()
      this.downloadJson(taskData, 'task.json');
      console.log('Task:', this.taskForm.value);
      console.log(taskData)
      // var vel kko pievienot, ja vajag (funkciju)
    }
  }

  private downloadJson(data: any, filename:string): void {
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

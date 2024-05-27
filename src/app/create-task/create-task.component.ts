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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class CreateTaskComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      console.log('Task:', this.taskForm.value);
      // var vel kko pievienot, ja vajag (funkciju)
    }
  }
}

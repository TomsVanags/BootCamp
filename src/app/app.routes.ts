import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path:'', redirectTo: '/create-task', pathMatch: 'full'},
    {path: 'create-task', component: CreateTaskComponent},
    {path: 'task-list', component: TaskListComponent}
    //vel citi celi velaak
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', redirectTo: '/create-task', pathMatch: 'full'},
    {path: 'create-task', component: CreateTaskComponent}
    //vel citi celi velaak
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

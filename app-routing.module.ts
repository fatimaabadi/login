import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskManagementComponent } from './task-management/task-management.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardOverviewComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
  { path: 'task-management/:projectId', component: TaskManagementComponent },
  { path: 'projects/:projectId/tasks', component: TaskManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


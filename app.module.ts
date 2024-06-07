import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProjectService } from './project.service';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskManagementComponent } from './task-management/task-management.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardOverviewComponent,
    TaskManagementComponent,
    ProjectDetailsComponent 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule
    AppRoutingModule
  ],
  providers: [provideAnimationsAsync(),ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

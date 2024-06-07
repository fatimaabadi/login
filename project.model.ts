import { Task } from './task.model';

// Your component or service code

export class Project {
  id: number;
  name: string;
  owner: string;
  startDate: Date;
  deadline: Date;
  completionPercentage: number;
  tasks?: Task[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.owner = '';
    this.startDate = new Date();
    this.deadline = new Date();
    this.completionPercentage = 0;
  }
}

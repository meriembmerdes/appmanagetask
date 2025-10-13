import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";

interface TaskModel {
  id: number;
  title: string;
  done: boolean;
}
@Component({
  selector: 'app-root',
   standalone: true, // ✅
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] //pluriel
})
export class App {
  protected readonly title = signal('todolist');

  tasks: TaskModel[]  = [
{ id : 1 , title: 'Learn Angular', done: false },
{id : 2 , title: 'Build ToDoList App', done: false },
{id : 3 , title: 'Celebrate!', done: true }
];
  // Add new task
  addTask(title: string) {
    if (!title.trim()) return;
    this.tasks.push({
      id: Date.now(),
      title,
      done: false
    });
  }

  // Delete task
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}

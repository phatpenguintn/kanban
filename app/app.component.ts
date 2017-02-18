import { Component } from '@angular/core';

import {Task} from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    private taskArray = [
        new Task(0,"Do Some stuff","description","in Progress"),
        new Task(1,"Buy a monkey","description","in Progress")
    ]

    private formTask = new Task(0,null,null,"Not Started");

    addTask() {
        let newTask = new Task (this.formTask.id, this.formTask.title, this.formTask.description, this.formTask.status);
        this.taskArray.push(newTask);
        this.formTask.id = parseInt(this.formTask.id) + 1;
        this.formTask.title = null;
        this.formTask.description = null;
        this.formTask.status = "Not Started";
    }
 
}
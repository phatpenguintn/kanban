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
 
}
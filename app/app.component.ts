import { Component } from '@angular/core';

import {Task} from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    task1: Task = {
        id: 1,
        title: 'Do Some stuff',
        description: "It's really cool stuff",
        status: "Not Started",
        predecessors: [ 0 ]

    }
}
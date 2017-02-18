import { Component, Input} from '@angular/core';

import {Task} from '../model/task';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css' ]
})
export class CardComponent { 
    @Input() task: Task;

    toggleStatus(){
        
        let currentStatus = this.task.status;
        if (currentStatus == "Not Started"){
            this.task.status = "In Progress";
        }else if (currentStatus == "In Progress"){
            this.task.status = "Complete";
        }else {
            this.task.status = "Not Started";
        }
    }
}

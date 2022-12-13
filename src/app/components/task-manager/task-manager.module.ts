import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { TaskManagerComponent } from './task-manager.component';
import { TaskService } from '../../services/task.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        TaskManagerComponent
    ],
    exports: [
        TaskManagerComponent
    ],
    providers: [
        TaskService
    ]
})

export class TaskManagerModule { }
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AddTaskAction, DeleteTaskAction, FetchTasksAction, SetTaskToCompleteAction } from '../../store/actions/task.action';
import { IAppState } from '../../models/app.state.model';
import { TaskService } from '../../services/task.service';
import { ITaskForm } from '../../models/task-form.model';
import { ITask } from '../../models/task.model';

@Component({
    selector: 'task-manager',
    templateUrl: './task-manager.component.html'
})

export class TaskManagerComponent implements OnInit {
    public taskData$: Observable<ITask[]> = this.store.select((store) => store.task);
    public form: FormGroup;

    constructor(
        private store: Store<IAppState>,
        private taskService: TaskService,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group<ITaskForm>({
            id: new FormControl<number | null>(null, Validators.required)
        });
    }

    ngOnInit(): void {
        this.taskService.getInitialTaskData().subscribe(
            (data: ITask[]) => this.store.dispatch(new FetchTasksAction(data))
        );
    }

    public addTask(values: ITask): void {
        if (this.form.valid) {
            values.complete = false;
            this.store.dispatch(new AddTaskAction(values));
            this.form.reset();
        }
    }

    public deleteTask(id: number): void {
        this.store.dispatch(new DeleteTaskAction(id));
    }

    public setToComplete(id: number): void {
        this.store.dispatch(new SetTaskToCompleteAction(id));
    }
}
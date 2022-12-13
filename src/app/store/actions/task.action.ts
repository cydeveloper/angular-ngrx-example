import { Action } from '@ngrx/store';
import { ITask } from '../../models/task.model';

export enum TaskActionType {
    FETCH_TASKS = '[TASK] Fetch Tasks',
    ADD_TASK = '[TASK] Add Task',
    SET_TASK_TO_COMPLETE = '[TASK] Set Task To Complete',
    DELETE_TASK = '[TASK] Delete Task',
}

export class FetchTasksAction implements Action {
    readonly type = TaskActionType.FETCH_TASKS;
    constructor(public tasks: ITask[]) { }
}

export class AddTaskAction implements Action {
    readonly type = TaskActionType.ADD_TASK;
    constructor(public task: ITask) { }
}

export class SetTaskToCompleteAction implements Action {
    readonly type = TaskActionType.SET_TASK_TO_COMPLETE;
    constructor(public id: number) { }
}

export class DeleteTaskAction implements Action {
    readonly type = TaskActionType.DELETE_TASK;
    constructor(public id: number) { }
}

export type TaskAction = FetchTasksAction
    | AddTaskAction
    | SetTaskToCompleteAction
    | DeleteTaskAction;
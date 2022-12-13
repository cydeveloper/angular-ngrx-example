import { ITask } from '../../models/task.model';
import { TaskAction, TaskActionType } from '../actions/task.action';

export const TaskReducer = (
    state: ITask[] = new Array<ITask>(),
    action: TaskAction
) => {
    switch (action.type) {
        case TaskActionType.FETCH_TASKS:
            return action.tasks;
        case TaskActionType.ADD_TASK:
            return [
                ...state,
                action.task
            ];
        case TaskActionType.SET_TASK_TO_COMPLETE:
            return state.map((task: ITask) => {
                if (task.id === action.id) {
                    task = { ...task, complete: true };
                }
                return task;
            });
        case TaskActionType.DELETE_TASK:
            return state.filter((task: ITask) =>
                task.id !== action.id
            );
        default:
            return state;
    }
}
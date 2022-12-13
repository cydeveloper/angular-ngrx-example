import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from 'src/app/models/app.state.model';
import { TaskReducer } from './task.reducer';

export const RootReducers: ActionReducerMap<IAppState, any> = {
    task: TaskReducer
};
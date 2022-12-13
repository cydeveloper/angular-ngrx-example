import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ITask } from "../models/task.model";

@Injectable()
export class TaskService {
    public getInitialTaskData(): Observable<ITask[]> {
        return of([
            { id: 1, complete: false },
            { id: 2, complete: false }
        ]);
    }
}
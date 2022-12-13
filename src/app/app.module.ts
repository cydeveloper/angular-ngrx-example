import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskManagerModule } from './components/task-manager/task-manager.module';
import { StoreModule } from '@ngrx/store';
import { RootReducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskManagerModule,
    StoreModule.forRoot(RootReducers)
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
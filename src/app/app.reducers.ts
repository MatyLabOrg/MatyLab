import { ActionReducerMap } from '@ngrx/store';
import * as uiReducer from './core/store/reducers/';


export interface AppState {
  ui: uiReducer.State;
}



export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer.uiReducer,
}
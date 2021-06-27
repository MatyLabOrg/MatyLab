import { ActionReducerMap } from '@ngrx/store';
import * as uiReducer from './core/store/reducers/';
import * as authReducer from '../app/auth/store/reducers';


export interface AppState {
  ui: uiReducer.State;
  auth: authReducer.State;
}



export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer.uiReducer,
  auth: authReducer.authReducer
}
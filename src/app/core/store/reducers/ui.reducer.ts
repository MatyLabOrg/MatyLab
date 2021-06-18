import { createReducer, on } from '@ngrx/store';
import * as UIActions from '../actions/ui.action';

export interface State {
    isLoading: boolean; 
}

export const initialState: State = {
   isLoading: false,
}

const _uiReducer = createReducer(initialState,

    on(UIActions.isLoading, state => ({ ...state, isLoading: true,})),
    on(UIActions.stopLoading, state => ({ ...state, isLoading: false,})),

);

export function uiReducer(state:any, action:any) {
    return _uiReducer(state, action);
}
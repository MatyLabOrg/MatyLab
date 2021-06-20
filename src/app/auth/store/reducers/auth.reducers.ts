import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import * as actions from '../actions';

export interface State {
    user: Usuario; 
}

export const initialState: State = {
   user: new Usuario('','',''),
}

const _authReducer = createReducer(initialState,

  on(actions.setUser, (state, { user }) => ({ ...state, user: { ...user } })),
  on(actions.unsetUser, state => ({ ...state, user: {...initialState.user} })),

);

export function authReducer(state: State | undefined, action: Action) {
    return _authReducer(state, action);
}
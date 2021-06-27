import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const setUser = createAction(
  '[Auth Component] Set User',
  props < {user:Usuario}>()
);
export const unsetUser = createAction('[Auth Component] Unset User');
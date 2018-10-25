import { Action } from '@ngrx/store';

export default interface BaseAction extends Action {
  payload: any;
}

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/let';

import { State } from '../states/index';

const reducers = {};

const applicationReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return applicationReducer(state, action);
}

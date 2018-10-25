import { ActionReducer } from '@ngrx/store';
import BaseAction from './base-action';

interface ActionMapping<A, P> {
  new(...args: any[]): A;
  prototype: { payload?: P };
}

type ActionCommandMapping<S, P> = (state: S, payload: P) => S;

export class CommandReducer<S> {
  private map = [];

  constructor(private defaultState: S) {}

  add = <A extends BaseAction, P>(action: ActionMapping<A, P>, command: ActionCommandMapping<S, P>) => {
    this.map.push({action, command});
    return this;
  }

  reducer = (): ActionReducer<S> => this._reducer;

  private _reducer: ActionReducer<S> = (state: S, action: BaseAction): S => {
    if (typeof state === 'undefined') {
      state = this.defaultState;
    }

    return this.map.reduce(
      (prevState, mapping) => action instanceof mapping.action
        ? mapping.command(prevState, action.payload)
        : prevState,
      state
    );
  }
}

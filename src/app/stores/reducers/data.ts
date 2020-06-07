import { createReducer, on, Action } from '@ngrx/store';
import { saveData, reset } from '../actions/data';
import { state } from '@angular/animations';
export interface State {
  dataForm: object;
  allData: [];
}
export const initialState: State = {
  dataForm: {},
  allData: []
};

const _dataReducer = createReducer(initialState,
  //@ts-ignore
  on(saveData, (state, action) => {
    let oldData = state.dataForm;
    let newData = { ...oldData, ...action }
    return { ...state, dataForm: newData }
  }
  ),
  on(reset, state => ({ ...state, dataForm: {} })),
);

export function dataReducer(state: State | undefined, action: Action) {
  return _dataReducer(state, action);
}
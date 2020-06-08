import { createReducer, on, Action } from '@ngrx/store';
import { saveData, submitData } from '../actions/data';


export const initialState = {};

const _dataReducer = createReducer(initialState,
  //@ts-ignore
  on(saveData, (state, action) => {
    let oldData = state;
    return state = { ...oldData, ...action }
  }
  ),
  on(submitData, (state, action) => {
    let newData = state;
    let allData = JSON.parse(localStorage.getItem("list_projects")) !== null  ? JSON.parse(localStorage.getItem("list_projects")) : [];
    allData.push(newData);
    localStorage.setItem("list_projects", JSON.stringify(allData));
    return state 
  }
  ),

);

export function dataReducer(state, action: Action) {
  return _dataReducer(state, action);
}
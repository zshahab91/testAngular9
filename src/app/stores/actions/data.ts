import { createAction, props } from '@ngrx/store';

export const saveData = createAction('[Data Component] SaveData', props<object>());
export const submitData = createAction('[Data Component] Submit Data');
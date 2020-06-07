import { createAction, props } from '@ngrx/store';

export const saveData = createAction('[Data Component] SaveData', props<object>());
export const reset = createAction('[Data Component] Reset');
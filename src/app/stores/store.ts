import { counterReducer } from './reducers/counter';
import { dataReducer } from './reducers/data';

export const Store = { 
    count: counterReducer,
    data: dataReducer
 }
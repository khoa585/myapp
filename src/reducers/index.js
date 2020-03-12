import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Taskreducer from './task';
import UiReducer from './ui';
const rootReducer = combineReducers({
    task : Taskreducer,
    ui : UiReducer,
    form: formReducer,
});
export default rootReducer;


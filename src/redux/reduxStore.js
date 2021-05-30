import { combineReducers, createStore } from 'redux';

import tableReducer from './tableReducer';
// import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    tablePage: tableReducer,
    // form: formReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;

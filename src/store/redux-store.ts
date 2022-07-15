import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter-reducer';

const rootReducer = combineReducers({
counterState: counterReducer,
});

// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// window.store = store;

export default store;

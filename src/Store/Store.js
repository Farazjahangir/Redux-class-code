import { createStore } from 'redux';
import rootReducer from './Reducers/RootReducer';


const initialState = {

}
const store = createStore(rootReducer, initialState);

console.log(store.getState());

export default store;
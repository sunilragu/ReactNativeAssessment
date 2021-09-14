import { createStore, combineReducers } from 'redux';
import orderReducer from './order';

//   export default combineReducers({
//     orderReducer
//   })


const rootReducer = combineReducers(
   { order: orderReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;
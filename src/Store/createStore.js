import { createStore/*, applyMiddleware*/,combineReducers } from 'redux'
import userReducer from '../Reducers/userReducer'

function initialStore() {
    const store=createStore(
      combineReducers({user:userReducer})
    );
  return store
}



export default initialStore

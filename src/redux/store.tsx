import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isLoadingReducer } from './reducer/loadingReducer';
import { userDataReducer } from './reducer/userDataReducer';
import { isUserLoginReducer } from './reducer/loginReducer'
const middleware = [thunk];

const rootReducer = combineReducers({
  loading: isLoadingReducer,
  userData: userDataReducer,
  is_loggedin: isUserLoginReducer,
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import classRoomReducer from './store/reducer'
import studentReducer from './store/students-reducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const logActionMiddleware = (store) => {
  return next => {
    return action => {
      console.log("Middleware before state: logger", action)
      console.log(store.getState())
      const result = next(action)
      console.log("Middleware after state logger", action)
      console.log(store.getState())
      return result
    }
  }
}

const rootReducer = combineReducers({
  students: studentReducer,
  classRooms: classRoomReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logActionMiddleware, thunk)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

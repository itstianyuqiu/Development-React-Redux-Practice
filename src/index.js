import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PracticeContext from './PracticeContext';
import PracticeToDoList from './PracticeToDoList';
import PracticeReducer from './PracticeReducer';
import PracticeMiniRedux from './PracticeMiniRedux';
import {Provider} from "react-redux"
import store from './store';
import Test01Div from './component/test01/Test01Div';
import Test02Div from './component/test01/Test02Div';
import TestButton from './component/test01/TestButton';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <PracticeToDoList/>
    {/* <PracticeContext/> */}
    {/* <PracticeReducer/> */}
    {/* <PracticeMiniRedux/> */}
    {/* <Provider store = {store}>
      <Test01Div/>
      <Test02Div/>
      <TestButton/>
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

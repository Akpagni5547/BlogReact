import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore} from 'redux-firestore'
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'


const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
  )
  );
  store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
        <Provider store={store}>
        <App />
        </Provider>
        </ThemeProvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
    reportWebVitals();
  })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


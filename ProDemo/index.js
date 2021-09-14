

import {AppRegistry} from 'react-native';
import React from 'react';

import {name as appName} from './app.json';

import { Provider }  from 'react-redux'
import configureStore from './src/reducers/configureStore';
import { orderAction } from './src/actions';
import { getOrderReviewData } from './src/api/OrderReviewData';
import ReviewScreen from './src/ui/ReviewScreen';
import App from './App';
import Reducer from './src/ui/reducers/ReviewReducer';
import { createStore } from 'redux';

// const store = configureStore()
  
// store.dispatch(orderAction(getOrderReviewData))

// const providerRedux = () => (
//   <Provider store = {store}>
//     <App />
//   </Provider>
// )

// AppRegistry.registerComponent(appName, () => providerRedux);

const store = createStore(Reducer);

const AppContainer = () => 
    <Provider store={store}>
        <ReviewScreen />
    </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);

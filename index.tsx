
import {AppRegistry} from 'react-native';
import React from 'react';

import {name as appName} from './app.json';

import { Provider }  from 'react-redux'

import ReviewScreen from './src/ui/ReviewScreen';

import Reducer from './src/ui/reducers/ReviewReducer';

import { createStore } from 'redux';


const store = createStore(Reducer);

const AppContainer = () => 
    <Provider store={store}>
        <ReviewScreen />
    </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);

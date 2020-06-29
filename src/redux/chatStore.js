import React from 'react';
import {createStore} from 'redux';
import chatReducer from './chatReducer';

const store = createStore(chatReducer);

export default store;

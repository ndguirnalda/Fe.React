import { createStore } from 'redux';
import testReducer from './../../features/sandox/testReducer';

export function configureStore(){
    return createStore(testReducer)    
}
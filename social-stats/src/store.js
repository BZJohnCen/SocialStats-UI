import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import { createStateSyncMiddleware,initStateWithPrevTab } from 'redux-state-sync';

const config = {
    // All actions will be triggered in other tabs except 'TOGGLE_TODO'
    whistlist: ['AUTH_VERIFIED']
  }
export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(createStateSyncMiddleware(config),logger,thunk, promise),
        
    );

    initStateWithPrevTab(store)

    return store
}


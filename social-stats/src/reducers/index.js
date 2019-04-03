import { combineReducers } from 'redux';
import twitterReducer from './reducer_twitter';
import { withReduxStateSync } from 'redux-state-sync'

const rootReducer = combineReducers({
    twitterReducer: twitterReducer
  });

  export default withReduxStateSync(rootReducer)
import { FETCH_TOKEN } from '../actions/index';

export default function(state  = {
    reducerToken:'',
    authVerified: false
}, action){

  switch (action.type) {
    case 'FETCH_TOKEN_FULFILLED':
        return ({
            ...state,
            reducerToken: action.payload.data.url,
        });
        break
    case 'AUTH_VERIFIED':
        return({
            ...state,
            authVerified: action.payload
            
        })
  }
  return state;
}

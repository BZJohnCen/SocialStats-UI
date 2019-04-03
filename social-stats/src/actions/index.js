import axios from 'axios';
import { deflateSync } from 'zlib';

export const FETCH_TOKEN = 'FETCH_TOKEN';
export const AUTH_VERIFIED = 'AUTH_VERIFIED';

export const requestTokenAction = () => dispatch => {
    const url = `/twitter/token`;
    const request = axios.get(url)
    dispatch({
        type: FETCH_TOKEN,
        payload: request
    })
}

export const setAuthVerified = () => dispatch => {
    dispatch({
        type: AUTH_VERIFIED,
        payload: true
    })
}



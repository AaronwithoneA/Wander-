import * as APIUtil from '../util/session_api_util';
import {hashHistory} from 'react-router';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user1 => dispatch(receiveCurrentUser(user1)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(
      user1 => dispatch(receiveCurrentUser(user1)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
    .then(hashHistory.push('/'))
);

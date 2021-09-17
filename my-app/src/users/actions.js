import { getAll } from './api/users';
import { USER_FETCH, USER_FETCH_SUCCESS } from './constants';

export function userFetch() {
  return {
    type: USER_FETCH,
  };
}

export function userFetchSuccess(users) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
}

export function userFetchRequested() {
  return async (dispatch) => {
    dispatch(userFetch());
    const users = await getAll();
    dispatch(userFetchSuccess(users));
  };
}

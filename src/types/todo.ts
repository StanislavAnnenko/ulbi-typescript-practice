export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface UserState {
  users: any[];
  isLoading: boolean;
  error: null | string;
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
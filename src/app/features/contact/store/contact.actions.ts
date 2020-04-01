import { Action } from '@ngrx/store';

export enum ContactActionsTypes {
  FETCH_PENDING = '[CONTACT: PENDING]',
  FETCH_ADD_STATE = '[CONTACT:  FETCH_ADD_STATE]',
  FETCH_STATE_FULFILLED = '[CONTACT:  FETCH_STATE_FULFILLED]',
  FETCH_ADD_DISTRICT = '[CONTACT:  FETCH_ADD_DISTRICT]',
  FETCH_DISTRICT_FULFILLED = '[CONTACT:  FETCH_DISTRICT_FULFILLED]',
  FETCH_ERROR = '[CONTACT: ERROR]  Last',
  CLEAR_DATA = '[CONTACT] CLEAR DATA',
}

export class FetchPending implements Action {
  readonly type = ContactActionsTypes.FETCH_PENDING;
  constructor() { }
}

export class FetchAddState implements Action {
  readonly type = ContactActionsTypes.FETCH_ADD_STATE;
  constructor() { }
}
export class FetchAddDistrict implements Action {
  readonly type = ContactActionsTypes.FETCH_ADD_DISTRICT;
  constructor(public payload: any) { }
}

export class FetchDistrictFulfilled implements Action {
  readonly type = ContactActionsTypes.FETCH_DISTRICT_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchStateFulfilled implements Action {
  readonly type = ContactActionsTypes.FETCH_STATE_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchError implements Action {
  readonly type = ContactActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = ContactActionsTypes.CLEAR_DATA;
}

export type ContactActions =
  FetchPending |
  FetchAddState |
  FetchStateFulfilled |
  FetchAddDistrict |
  FetchDistrictFulfilled |
  FetchError |
  ClearData;

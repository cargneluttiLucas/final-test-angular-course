import { ContactActions, ContactActionsTypes } from './contact.actions';

export interface IContact {
  data: any;
  states: any;
  distrcts: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IContact = {
  data: null,
  distrcts: null,
  states: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

export function reducer(state = initialState, action: ContactActions): IContact {
  switch (action.type) {
    case ContactActionsTypes.FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };

    case ContactActionsTypes.FETCH_ADD_STATE:
      return {
        ...state,
        pending: true,
        isFetchCompleted: false,
      };

    case ContactActionsTypes.FETCH_ADD_DISTRICT:
      return {
        ...state,
        pending: true,
        isFetchCompleted: false,
      };

    case ContactActionsTypes.FETCH_DISTRICT_FULFILLED:
      return {
        ...state,
        pending: false,
        distrcts: action.payload,
        isFetchCompleted: true,
      };


    case ContactActionsTypes.FETCH_STATE_FULFILLED:
      return {
        ...state,
        pending: false,
        states: action.payload,
        isFetchCompleted: true,
      };

    case ContactActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: false,
        error: true,
        data: action.payload
      };

    case ContactActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}

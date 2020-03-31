import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContact from './contact.reducer';

export const selectState = createFeatureSelector<fromContact.IContact>('contact');
export const selectDataState = createSelector(selectState, (states: fromContact.IContact) => {
  if (states.isFetchCompleted) {
    return states.states;
  }
});

export const selectDistrict = createFeatureSelector<fromContact.IContact>('contact');
export const selectDataDistrict = createSelector(selectDistrict, (district: fromContact.IContact) => {
  if (district.isFetchCompleted) {
    return district.distrcts;
  }
});

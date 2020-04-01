import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ContactActionsTypes } from './contact.actions';
import { ContactService } from '../services/contact.service';

@Injectable()
export class ContactEffects {
  constructor(private actions$: Actions, private contactService: ContactService) { }

  @Effect() getStates$ = this.actions$.pipe(ofType(ContactActionsTypes.FETCH_ADD_STATE)).pipe(
    map((action: any) => action.payload),
    switchMap(() => {
      return this.contactService.loadStates().pipe(
        map(response => ({ type: ContactActionsTypes.FETCH_STATE_FULFILLED, payload: response })),
        catchError((err: HttpErrorResponse) => of({ type: ContactActionsTypes.FETCH_ERROR, payload: err })),
      );
    }),
  );

  @Effect() getDistrct$ = this.actions$.pipe(ofType(ContactActionsTypes.FETCH_ADD_DISTRICT)).pipe(
    map((action: any) => action.payload),
    switchMap((payload: any) => {
      return this.contactService.loadDistrict(payload).pipe(
        map(response => ({ type: ContactActionsTypes.FETCH_DISTRICT_FULFILLED, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: ContactActionsTypes.FETCH_ERROR, payload: err })),
        );
    }),
  );
}

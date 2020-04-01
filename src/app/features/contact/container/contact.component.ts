import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Subscription, Observable } from 'rxjs';

import * as fromActionsContact from '../store/contact.actions';
import * as fromSelectorContact from '../store/contact.selectors';
import { Store, select } from '@ngrx/store';
import { IContact } from '../store/contact.reducer';
import { filter, debounceTime, map } from 'rxjs/operators';
import { state } from '@angular/animations';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Contact } from '../../../shared/models/contact.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

    states: [] = [];
    districs: [] = [];
    state: number;
    distric: number;

    loadStatesUnsuscribe: Subscription;
    loadDistrctUnsuscribe: Subscription;

    contactForm: FormGroup;
    submitted: boolean = false;
    contac: Contact;

    @Output() getContact: EventEmitter<Contact> = new EventEmitter();

    constructor(
        private fb: FormBuilder,
        private store: Store<IContact>,
    ) { }

    ngOnInit() {
        this.store.dispatch(
            new fromActionsContact.FetchPending(),
        );
        this.loadState();
        this.getStates();
        this.buildForm();
    }

    buildForm() {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            last_name: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            adressName: ['', Validators.required],
            stateName: [null, Validators.required],
            districtName: [null, Validators.required],
            zipCode: [null, Validators.required],
        });
    }

    loadState() {
        this.store.dispatch(
            new fromActionsContact.FetchAddState(),
        );
    }

    getStates() {
        this.loadStatesUnsuscribe = this.store
            .pipe(select(fromSelectorContact.selectDataState))
            .pipe(filter(val => !!val))
            .subscribe((data: any) => {
                this.states = data.provincias;
            });
    }

    selectState(event) {
        this.state = event;
        this.store.dispatch(
            new fromActionsContact.FetchAddDistrict(this.state),
        );
        this.getDistrict();
    }

    getDistrict() {
        this.loadDistrctUnsuscribe = this.store
            .pipe(select(fromSelectorContact.selectDataDistrict))
            .pipe(filter(val => !!val))
            .subscribe((data: any) => {
                this.districs = data.municipios;
            });
    }

    selectDistrict(event) {
        this.distric = event;
    }

    saveContact() {
        this.submitted = true;
        if (!this.contactForm.valid) {
            return;
        }
        this.contac = new Contact(
            1,
            this.contactForm.get('name').value,
            this.contactForm.get('last_name').value,
            this.contactForm.get('phone').value,
            this.contactForm.get('email').value,
            this.contactForm.get('adressName').value,
            this.contactForm.get('stateName').value,
            this.contactForm.get('districtName').value,
            this.contactForm.get('zipCode').value,
        );
        this.getContact.next(this.contac);
        this.resetForm();
    }

    resetForm() {
        this.submitted = false;
        this.contactForm.reset();
    }

    ngOnDestroy() {
        if (this.loadStatesUnsuscribe) {
            this.loadStatesUnsuscribe.unsubscribe();
        }
        if (this.loadDistrctUnsuscribe) {
            this.loadDistrctUnsuscribe.unsubscribe();
        }
    }

}

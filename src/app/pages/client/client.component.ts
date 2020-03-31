import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contact.model';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

    contact: Contact;
    contacts: Contact[];
    constructor() { }

    ngOnInit() {
        this.contacts = new Array<Contact>();
    }

    getContact(newContact: Contact) {
        console.log(newContact)
        this.contacts.push(newContact);
    }
}

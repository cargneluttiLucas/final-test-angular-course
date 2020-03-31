import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    public selectedContact: Contact = null;
    constructor() { }

    selectContactById(idContact: number) {
        // esto quiere decir que el conacto ya esta seleccionado. Lo pasamos a null
        if (this.selectedContact && this.selectedContact.id === idContact) {
            this.selectedContact = null;
        } else {
            // obtener el contacto
            this.selectedContact = this.getContacts()
                .find(item => item.id === idContact);
        }
    }

    getContacts() { 
        return [
            new Contact(1, 'albert', 'fox', '234123123',
                'asdf@asd.com', 'asdf 23', 'state', 'distrinc',
                123),
        ];
    }

}

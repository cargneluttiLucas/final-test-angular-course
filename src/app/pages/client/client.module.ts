import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { ContactModule } from 'src/app/features/contact/contact.module';
import { ContactsListModule } from 'src/app/features/contacts-list/contacts-list.module';
import { ClientRoutingModule } from './client.routing';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';


@NgModule({
    imports: [
        CommonModule,
        ContactModule.forRoot(),
        ContactsListModule,
        ClientRoutingModule,
        ComponentsModule
    ],
    declarations: [ClientComponent],
    entryComponents: [ClientComponent],
    exports: [ClientComponent]
})
export class ClientModule { }

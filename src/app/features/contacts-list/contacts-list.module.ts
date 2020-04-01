import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Component
import { ContactComponent } from './container/contact.component';
import { PipesModule } from '../../shared/pipes/pipe.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        DirectivesModule
    ],
    declarations: [
        ContactComponent,
    ],
    exports: [
        ContactComponent,
    ],
    providers: []
})
export class ContactsListModule {}

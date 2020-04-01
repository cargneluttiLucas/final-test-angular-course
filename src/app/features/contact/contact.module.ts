import { NgModule, ModuleWithProviders } from '@angular/core';
import { ContactComponent } from './container/contact.component';
import { ContactService } from './services/contact.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/component/components.module';

import * as fromContactReducer from './store/contact.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/contact.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('contact', fromContactReducer.reducer),
        EffectsModule.forFeature([ContactEffects]),
        EffectsModule.forRoot([])
    ],
    declarations: [
        ContactComponent
    ],
    entryComponents: [
        ContactComponent
    ],
    exports: [
        ContactComponent
    ],
    providers: [ContactService]
})
export class ContactModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: ContactModule
        };
      }
}

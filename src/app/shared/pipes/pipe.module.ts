import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpperCapitalPipe } from './upper-capital.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [ UpperCapitalPipe ],
    exports: [ UpperCapitalPipe]
})
export class PipesModule {}

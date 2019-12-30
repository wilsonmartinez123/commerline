import { NgModule } from '@angular/core';
import { UniquePipe } from './unique/unique';
import { ReplacePipe } from './replace/replace';
import { OrderByPipe } from './order-by/order-by';
import { SafePipe } from './safe/safe';
import { AutocompletewordsPipe } from './autocompletewords/autocompletewords';
import { FilterUniquePipe } from './filter-unique/filter-unique';
import { OfferTimePipe } from './offer-time/offer-time';

@NgModule({
    declarations: [UniquePipe,
        ReplacePipe,
        OrderByPipe,
        SafePipe,
        AutocompletewordsPipe,
        FilterUniquePipe,
    OfferTimePipe,

    ],
    imports: [],
    exports: [UniquePipe,
        ReplacePipe,
        OrderByPipe,
        SafePipe,
        AutocompletewordsPipe,
        FilterUniquePipe,
    OfferTimePipe,

    ]
})
export class PipesModule { }

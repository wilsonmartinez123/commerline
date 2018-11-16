import { NgModule } from '@angular/core';
import { UniquePipe } from './unique/unique';

@NgModule({
	declarations: [UniquePipe,
    ],
	imports: [],
	exports: [UniquePipe,
    ]
})
export class PipesModule {}

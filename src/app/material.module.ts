import { NgModule } from'@angular/core';
import { CommonModule } from'@angular/common';

import{ MatCardModule,
        MatInputModule, 
        MatButtonModule, 
        MatProgressSpinnerModule, 
        MatRadioModule } from'@angular/material';

@NgModule({
    imports:[
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRadioModule,
    ],
    exports:[
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRadioModule,
    ]
})
export class Material{}
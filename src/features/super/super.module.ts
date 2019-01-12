import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { superReducer } from './+state/super.reducers';
import { SuperComponent } from './super.component';

@NgModule({
  declarations: [
    SuperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SuperComponent,
      },
    ]),
    StoreModule.forFeature('super', superReducer),
  ],
})
export class SuperModule {
}

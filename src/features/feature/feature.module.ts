import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { featureReducer } from './+state/feature.reducers';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureComponent,
      },
    ]),
    StoreModule.forFeature('feature', featureReducer),
  ],
})
export class FeatureModule {
}

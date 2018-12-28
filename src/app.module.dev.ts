import { NgModule, NgModuleFactoryLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FeatureModuleNgFactory } from './feature/feature.module.ngfactory';

export class MyLoader extends NgModuleFactoryLoader {
  load(id: string) {
    switch (id) {
      case 'feature/feature.module#FeatureModule':
        return Promise.resolve(FeatureModuleNgFactory);
      default:
        throw new Error(`Unrecognized route id ${id}`);
    }
  }
}

@NgModule({
  imports: [
    AppModule,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: MyLoader,
    },
  ],
})
export class AppModuleDev {
}

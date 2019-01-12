import { NgModule, NgModuleFactoryLoader } from '@angular/core';

import { SuperModuleNgFactory } from '../features/super/super.module.ngfactory';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';


export class MyLoader extends NgModuleFactoryLoader {
  load(id: string) {
    switch (id) {
      case '../features/super/super.module#SuperModule':
        return Promise.resolve(SuperModuleNgFactory);
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

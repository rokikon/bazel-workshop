import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { AppComponent } from './app/app.component';
// import { ɵrenderComponent as renderComponent, ɵwhenRendered as whenRendered } from '@angular/core';
// import { AppTestComponent } from './app/app-test.component';

// const app = renderComponent(AppComponent);

// whenRendered(app).then(() => {
//     console.log(app.title);
//     renderComponent(AppTestComponent);
// });

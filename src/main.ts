import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { HelloAngularElementModule } from './app/hello-angular-element/hello-angular-element.module';

if (environment.production) {
  enableProdMode();
}

/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));*/

platformBrowserDynamic().bootstrapModule(HelloAngularElementModule)
  .catch(err => console.error(err));

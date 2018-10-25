import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import Apps from './applications';

const { currentApp } = window['NgApps'];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(Apps[currentApp])
  .catch(err => console.log(err));

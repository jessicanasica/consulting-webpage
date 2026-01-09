import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers,
    provideIonicAngular(),
    provideAnimations(),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));

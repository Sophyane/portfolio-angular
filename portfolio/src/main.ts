import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environnements/environnement';
import { enableProdMode } from '@angular/core';
import { enableElfProdMode } from '@ngneat/elf';
import { devTools } from '@ngneat/elf-devtools';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
  enableElfProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    if (!environment.production) {
      devTools(); // Configure devtools only in non-production environment
    }
  })
  .catch((err) => console.error(err));

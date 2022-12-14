import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ConfigurationService } from './app/configuration/configuration.service';
import { Environment } from './app/configuration/environment';

function loadExternalConfig(appConfig: ConfigurationService) {
  return () => {
    return appConfig.loadConfig();
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    Environment,
    {
      provide: APP_INITIALIZER,
      useFactory: loadExternalConfig,
      deps: [ConfigurationService],
      multi: true,
    },
  ],
}).catch((err) => console.error(err));

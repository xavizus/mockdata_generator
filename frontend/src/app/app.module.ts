import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppConfig} from './appConfig';
import {HttpClientModule} from '@angular/common/http';

function initConfig(config: AppConfig) {
  return () => config.downloadConfigFile();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      multi: true,
      deps: [AppConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

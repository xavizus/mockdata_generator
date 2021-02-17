import { Component } from '@angular/core';
import {AppConfig} from './appConfig';

@Component({
  selector: 'app-root',
  template: ''
})
export class AppComponent {

  constructor(private config: AppConfig) {
    console.log(this.config.getConfig('apiServer'));
  }

}

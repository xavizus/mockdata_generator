import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Config {
  env: string,
  apiServer: string
}

@Injectable()
export class AppConfig
{
  private configUrl = "assets/config/config.json";

  private config: Config = {env: '', apiServer: ''};

  constructor(private http: HttpClient) { }

  public getConfig(key: string) {
    return this.config[key as keyof Config];
  }

  public downloadConfigFile(): any {
    return new Promise(resolve => {
      this.http.get<Config>(this.configUrl).subscribe(data => {
        this.config = data;
        resolve(true);
      });

    });
  }
}

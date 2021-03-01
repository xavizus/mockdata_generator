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

  async downloadConfigFile(): Promise<void> {
      const result = await this.http.get<Config>(this.configUrl).toPromise();
      this.config = result;
  }
}

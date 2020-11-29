import { Injectable, Optional } from '@angular/core'
import { Config } from '../models/config'

@Injectable({
    providedIn: 'root'
})

export class ConfigService {
    public client_id: string | undefined
    public client_secret: string | undefined
    public api_url: string | undefined
    public web_url: string | undefined
    
    constructor(@Optional() config?: Config) {
        if(config) {
            this.client_id = config.client_id
            this.client_secret = config.client_secret
            this.api_url = config.api_url
            this.web_url = config.web_url
        }
    }
}

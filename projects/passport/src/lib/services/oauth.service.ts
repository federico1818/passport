import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Credentials } from '../models/credentials'
import { ConfigService } from './config.service'

@Injectable({
    providedIn: 'root'
})

export class OauthService {
    constructor(
        protected http: HttpClient,
        protected configService: ConfigService
    ) {}

    public login(credentials: Credentials) {
        const path = '/oauth/token'
        
        return this.http.post(`${ this.configService.url }${ path }`, {
            'grant_type': 'password',
            'client_id': this.configService.client_id,
            'client_secret': this.configService.client_secret,
            'username': credentials.email,
            'password': credentials.password,
            'scope': '*',
        })
    }
}

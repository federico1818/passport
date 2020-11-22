import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Credentials } from '../models/credentials'
import { ConfigService } from './config.service'
import { TokenService } from './token.service'

import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})

export class OauthService {
    constructor(
        protected http: HttpClient,
        protected configService: ConfigService,
        protected tokenService: TokenService
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
        }).pipe(
            map((res: any) => {
                this.tokenService.token = res
                return res
            })
        )
    }

    public register(form: any) {
        const path = '/oauth/register'
        
        return this.http.post(`${ this.configService.url }${ path }`, form)
    }
}
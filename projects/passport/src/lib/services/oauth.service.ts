import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Credentials } from '../models/credentials'
import { ConfigService } from './config.service'
import { TokenService } from './token.service'

import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class OauthService {
    constructor(
        protected http: HttpClient,
        protected configService: ConfigService,
        protected tokenService: TokenService
    ) {}

    public login(credentials: Credentials, path: string = '/oauth/token') {
        return this.http.post(`${ this.configService.api_url }${ path }`, {
            grant_type: 'password',
            client_id: this.configService.client_id,
            client_secret: this.configService.client_secret,
            username: credentials.email,
            password: credentials.password,
            scope: '*',
        }).pipe(
            map((res: any) => {
                this.tokenService.token = res
                return res
            })
        )
    }

    public register(form: any, path: string = '/oauth/register'): Observable<any> {
        return this.http.post(`${ this.configService.api_url }${ path }`, form)
    }
 
}
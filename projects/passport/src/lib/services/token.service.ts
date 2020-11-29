import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { Token } from '../models/token'
import { ConfigService } from './config.service'

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    private _token: any | null
    //private _token_key: string = 'oauth-token'
    
    constructor(
        protected cookieService: CookieService,
        protected configService: ConfigService
    ) {}

    set token(token: Token) {
        this.cookieService.set('token_type', token.token_type, { domain: this.configService.web_url })
        this.cookieService.set('expires_in', token.expires_in, { domain: this.configService.web_url })
        this.cookieService.set('access_token', token.access_token, { domain: this.configService.web_url })
        this.cookieService.set('refresh_token', token.refresh_token, { domain: this.configService.web_url })
        this._token = token
    }

    get token(): Token {
        return this._token
    }
}

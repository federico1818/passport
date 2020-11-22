import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { Token } from '../models/token'

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    private _token: any | null
    //private _token_key: string = 'oauth-token'
    
    constructor(
        protected cookieService: CookieService
    ) {}

    set token(token: Token) {
        this.cookieService.set('token_type', token.token_type)
        this.cookieService.set('expires_in', token.expires_in)
        this.cookieService.set('access_token', token.access_token)
        this.cookieService.set('refresh_token', token.refresh_token)
        this._token = token
    }

    get token(): Token {
        return this._token
    }
}

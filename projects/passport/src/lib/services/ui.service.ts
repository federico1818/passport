import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { ConfigService } from './config.service'

@Injectable({
    providedIn: 'root'
})

export class UiService {
    constructor(
        protected http: HttpClient,
        protected configService: ConfigService
    ) {}

    public sendResetLinkEmail(form: any, path: string = '/api/password/email'): Observable<any> {
        return this.http.post(`${ this.configService.api_url }${ path }`, form)
    }
   
    public resetPassword(form: any, path: string = '/api/password/reset'): Observable<any> {
        return this.http.post(`${ this.configService.api_url }${ path }`, form)
    }
    
    public verifyEmail(form: any, path: string = '/api/email/verify'): Observable<any> {
        return this.http.get(`${ this.configService.api_url }${ path }/${ form['id'] }/${ form['hash']}`)
    }

}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

import { ConfigService } from './config.service'

@Injectable({
    providedIn: 'root'
})

export class UiService {
    constructor(
        protected http: HttpClient,
        protected configService: ConfigService
    ) {}

    public sendResetLinkEmail(form: any, path: string = '/password/email'): Observable<any> {
        return this.http.post(`${ this.configService.api_url }${ path }`, form)
    }
}

import { NgModule, ModuleWithProviders } from '@angular/core'
import { PassportComponent } from './passport.component'
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'

import { ConfigService } from './services/config.service'


@NgModule({
    declarations: [
        PassportComponent
    ],
    imports: [
        HttpClientModule
    ],
    providers: [
        CookieService
    ],
    exports: [
        PassportComponent
    ]
})

export class PassportModule {
    static forRoot(config: any): ModuleWithProviders<PassportModule> {
        return {
            ngModule: PassportModule,
            providers: [
                {
                    provide: ConfigService, 
                    useValue: config
                }
            ]
        }
    }
}

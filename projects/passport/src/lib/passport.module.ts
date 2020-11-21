import { NgModule, ModuleWithProviders } from '@angular/core'
import { PassportComponent } from './passport.component'
import { HttpClientModule } from '@angular/common/http'

import { ConfigService } from './services/config.service'


@NgModule({
    declarations: [PassportComponent],
    imports: [
        HttpClientModule
    ],
    exports: [PassportComponent]
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

# Passport

An Angular library to connect with a Laravel application with laravel/passport and laravel/ui.

## Prerequisites

* Angular 11.0.2
* Laravel 7

## Configuration

### Configuration in Angular

1. Add oauth config to environments variable

Open ```/src/environments/environment.ts``` and add your oauth configuration.

```ts
export const environment = {
    production: false,
    oauth: {
        /* `oauth_clients` table, column: `id` */
        client_id: 'CLIENT_ID', 
        
        /* `oauth_clients` table, column: `secret` */
        client_secret: 'CLIENT_SECRET', 

        /* Example: http://localhost:8000 */
        url: 'URL'
    }
}
```

2. Setup @NgModule for the PassportModule

Open ```/src/app/app.module.ts```, inject the PassportModule, and specify your configuration.

```ts
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PassportModule } from '@federico1818/passport'
import { environment } from 'src/environments/environment'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PassportModule.forRoot(environment.oauth)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
```

### Configuration in Laravel

1. Edit ```AuthServiceProvider```

```php
public function boot()
{
    $this->registerPolicies();

    Passport::routes();
    
    Route::post('/oauth/register', '\App\Http\Controllers\Auth\RegisterController@register');
    Route::post('/password/email', '\App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
}
```

2. Edit ```routes/api.php```

```php
Auth::routes();
```


## Example use

### Login

```ts
import { OauthService } from '@federico1818/passport'

export class LoginComponent {
    constructor(
        protected oauthService: OauthService
    ) {}

    public login(form: any): void {
        this.oauthService.login(form).subscribe()
    }
}
```

### Send reset link email

```ts
import { UiService } from '@federico1818/passport'

export class PasswordComponent {
    constructor(
        protected uiService: UiService
    ) {}

    public sendResetLinkEmail(form: any): void {
        this.uiService.sendResetLinkEmail(form, '/api/password/email').subscribe()
    }
}
```
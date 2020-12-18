# Passport

An Angular library to connect with a Laravel application with Passport.

## Configuration

### 1. Add oauth config to environments variable

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

### 2. Setup @NgModule for the PassportModule

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

## Laravel

### Edit ```AuthServiceProvider```

```php
public function boot()
{
    $this->registerPolicies();

    Passport::routes();
    
    Route::post('/oauth/register', '\App\Http\Controllers\Auth\RegisterController@register');
    Route::post('/password/email', '\App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
}
```
# Utils

This library has utils for angular projects.

## Prerequisites

* Angular 11.0.2

## Components

### FormComponent

#### Example use

1. Extends ```FormComponent```

```ts
    import { FormComponent } from '@federico1818/utils'
    
    export class MyFormComponent extends FormComponent {
        public form = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        })
    }
```

2. Bind to submit event

```html
    <app-my-form (submitted)="onSubmit($event)"></app-my-form>
```

3. Get the Form value object

```ts
    export class MyParentComponent {
        public onSubmit(formValue: any): void {
            // TODO
        }
    }
```
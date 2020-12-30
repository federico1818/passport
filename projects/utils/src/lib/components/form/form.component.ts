import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
    template: ''
})

export abstract class FormComponent implements OnInit {
    @Input() public data: any
    @Output() submitted: EventEmitter<any> = new EventEmitter<any>()
    
    public abstract form: FormGroup

    constructor(
        protected fb: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.form.patchValue(this.data?? {})
    }
    
    public onSubmit(): void {
        if(this.form.valid)
            this.send()
    }

    protected send(): void {
        this.submitted.emit(this.form.value)
    }
}

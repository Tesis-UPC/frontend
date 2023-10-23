import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMmAaFormat][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MmAaFormatDirective,
      multi: true
    }
  ]
})
export class MmAaFormatDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const mmAaPattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/AA format regex

    if (control.value && !mmAaPattern.test(control.value)) {
      return { 'mmAaFormat': true };
    }

    return null;
  }
}

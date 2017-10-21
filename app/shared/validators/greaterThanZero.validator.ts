import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[greaterThanZero][ngModel],[greaterThanZero][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => GreaterThanZeroValidator), multi: true }
  ]
})
export class GreaterThanZeroValidator {
  validate(c: FormControl) {
    const value = parseFloat(c.value);
    return value !== undefined && value > 0 ? null : {
      greaterThanZero: {
        valid: false
      }
    };
  }
}

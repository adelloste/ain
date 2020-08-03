import { ValidatorFn, AbstractControl } from '@angular/forms';

import CodiceFiscale from 'codice-fiscale-js';

export function Cf(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        let cf = control.value || '';

        if (!CodiceFiscale.check(cf)) {
            return {
                cf: {
                    valid: false
                }
            };
        }
        return null;
    };

}

import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Injectable()
export class AidManagerService {

    check(cf: string = 'BPPLLO71A01I726E', codeAin: string = '0000000000'): string {
        // prime 8 cifre dell'AIN
        let code: string = codeAin.substring(0, codeAin.length - 2);
        // sha256 del codice fiscale
        let sha256Cf: string = CryptoJS.SHA256(cf).toString(CryptoJS.enc.Hex);
        // binario del codice fiscale hashato
        let binaryCf = this.hex2bin(sha256Cf);
        // calcolo del primo digit
        let primoDigit: string = this.luhm(binaryCf);
        // aggiornamento code
        code = code + primoDigit;
        // calcolo del secondo digit
        let secondoDigit: string = this.luhm(code);
        // aggiornamento code
        code = code + secondoDigit;
        
        return code;
    }

    hex2bin(hex: string): string {
        return hex.split('').reduce((acc, i) => {
          return acc + ('000' + parseInt(i, 16).toString(2)).substr(-4, 4);
        }, '');
    }

    luhm(codeAin: string): string {
        let digit: string = '';
        let digits: number[] = [];
        for(let i = 0; i < codeAin.length; i++) {
                digits[i] = parseInt(codeAin.charAt(i));
        }
        for(let i = digits.length - 1; i >= 0; i -= 2) {
                digits[i] += digits[i];
                
                /* taking the sum of digits grater than 10 - simple trick by substract 9 */
                if(digits[i] >= 10) {
                    digits[i] = digits[i] - 9;
                }
        }
    
        let sum: number = 0;
            for(let i = 0; i < digits.length; i++) {
                sum += digits[i];
            }
            /* multiply by 9 step */
            sum = sum * 9;
            
            /* convert to string to be easier to take the last digit */
            digit = sum + "";
            return digit.substring(digit.length - 1);
      }

}
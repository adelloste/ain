import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoaderManagerService {

    // Observable boolean sources
    private subject = new Subject<boolean>();

    // Service status commands
    changeStatus(value: boolean): void {
        this.subject.next(value);
    }

    getStatus(): Observable<boolean> {
        return this.subject.asObservable();
    }

}
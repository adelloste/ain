import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

// https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
@Injectable()
export class SidenavManagerService {

    // Observable any sources
    private statusAnnouncedSource = new Subject<void>();
    
    // Observable any streams
    statusAnnounced$ = this.statusAnnouncedSource.asObservable();
    
    // Service message commands
    announceStatus(): void {
        this.statusAnnouncedSource.next();
    }

}

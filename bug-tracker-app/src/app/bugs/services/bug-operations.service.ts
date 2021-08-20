import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from '../models/bug';
import { BugApi } from './bug-api.service';
import { BugStorageService } from './bug-storage.service';

@Injectable({
	providedIn: 'root'
})
export class BugOperationService {
	constructor(private bugApi: BugApi) { }

	getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    getById(id : string) : Observable<Bug>{
        return this.bugApi.getById(id);
    }

	createNew(newBugName:string) : Observable<Bug> {
        const newBug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugApi.save(newBug);
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
    }

    remove(bugToRemove : Bug) : void {
        this.bugApi.delete(bugToRemove).subscribe(null)
    }
}
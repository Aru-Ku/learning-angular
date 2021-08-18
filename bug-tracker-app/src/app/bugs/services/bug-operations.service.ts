import { Bug } from '../models/bug';

export class BugOperationService {
  private currentBugId: number = 0;
	private storage : Storage = window.localStorage;

	loadBugsFromLocalStorage(): Array<Bug> {
		const allBugsIds : Array<string> =  Object.keys(this.storage);
		this.currentBugId = allBugsIds.length === 0 ? 0 : Math.max( ...allBugsIds.map(id => +id) );
		return allBugsIds.reduce((result, bugId) => ([ ...result, JSON.parse(this.storage.getItem(bugId)) ]), []);
	}

  createNewBug(newBugName: string): Bug {
		const newBug = { id: ++this.currentBugId, name: newBugName, createdAt: new Date(), isClosed: false };
		this.storage.setItem(String(newBug.id), JSON.stringify(newBug));
    return newBug;
	}
	
	toggleBugStatus(bugToToggle: Bug) {
		bugToToggle.isClosed = !bugToToggle.isClosed;
		this.storage.setItem(String(bugToToggle.id), JSON.stringify(bugToToggle));
	}

	removeBug(bugId: number) {
		this.storage.removeItem(String(bugId));
	}
}
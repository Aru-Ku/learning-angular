import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Bug } from './models/bug';
import { BugOperationService } from './services/bug-operations.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  bugs: Array<Bug> = [];
  sortAttr: string = 'id';
  sortByDesc: boolean = false;

  constructor(private bugOps: BugOperationService) {
    this.bugs = this.bugOps.loadBugsFromLocalStorage();
  }
  
  ngOnInit(): void {
  }

  newBugCreated(newBug: Bug) {
    this.bugs = [ newBug, ...this.bugs ];
  }

  onBugNameClick(bugToToggle: Bug) {
    const newToggleBug = this.bugOps.toggleBugStatus(bugToToggle);
    this.bugs = this.bugs.map((bug: Bug) => bug.id === newToggleBug.id ? newToggleBug : bug )
  }
  
  onRemoveBug(bugId: number) {
    this.bugs = this.bugs.filter((bug: Bug) => bug.id !== bugId);
    this.bugOps.removeBug(bugId);
  }
  
  onRemoveAllClosedBugs() {
    this.bugs = this.bugs.filter((bug: Bug) => {
      if(bug.isClosed) this.bugOps.removeBug(bug.id);
      return !bug.isClosed
    });
  }
}

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
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
  }
  
  ngOnInit(): void {
    this.bugOps
      .getAll()
      .subscribe((bugs: Array<Bug>) => this.bugs = bugs);
  }

  newBugCreated(newBug: Bug) {
    this.bugs = [ newBug, ...this.bugs ];
  }

  onBugNameClick(bugToToggle: Bug) {
    this.bugOps.toggle(bugToToggle)
    .subscribe((newBug: Bug) => {
      this.bugs = this.bugs.map((bug: Bug) => bug.id === newBug.id ? newBug : bug )
    });
  }
  
  onRemoveBug(bugToRemove: Bug) {
    this.bugs = this.bugs.filter((bug: Bug) => bug.id !== bugToRemove.id);
    this.bugOps.remove(bugToRemove);
  }
  
  onRemoveAllClosedBugs() {
    this.bugs = this.bugs.filter((bug: Bug) => {
      if(bug.isClosed) this.bugOps.remove(bug);
      return !bug.isClosed
    });
  }
}

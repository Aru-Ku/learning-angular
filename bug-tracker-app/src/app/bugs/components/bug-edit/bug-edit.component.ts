import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Bug } from '../../models/bug';
import { BugOperationService } from '../../services/bug-operations.service';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {
  @Output()
  created: EventEmitter<Bug> = new EventEmitter<Bug>();

  bugName: string = ''

  constructor(private bugOps: BugOperationService, private router: Router) { }

  ngOnInit(): void {
  }

  onBtnAddNewBug() {
    if(!this.bugName) return;
    this.bugOps.createNew(this.bugName).subscribe(bug => {
      // this.created.emit(bug);
      this.router.navigate(['bugs'])
    });
  }

}

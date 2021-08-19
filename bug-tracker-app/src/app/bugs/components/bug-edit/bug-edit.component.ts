import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private bugOps: BugOperationService) { }

  ngOnInit(): void {
  }

  onBtnAddNewBug() {
    if(!this.bugName) return;
    this.created.emit(this.bugOps.createNewBug(this.bugName));
  }

}

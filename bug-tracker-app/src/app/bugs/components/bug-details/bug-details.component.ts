import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bug } from '../../models/bug';
import { BugOperationService } from '../../services/bug-operations.service';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {

  bug : Bug = {
    id: 0,
    name: '',
    createdAt: new Date(),
    isClosed: false
  }

  constructor(private bugOperations : BugOperationService, private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.bugOperations.getById(id).subscribe(bug => this.bug = bug);
    });
  }

}

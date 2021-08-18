import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugOperationService } from './bugs/services/bug-operations.service';
import { TrimTextPipe } from './bugs/pipes/trim-text.pipe';
import { ParseTimePipe } from './bugs/pipes/parse-time.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { ClosedCountNoPipe } from './bugs/pipes/closed-count-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    ParseTimePipe,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountNoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [BugOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

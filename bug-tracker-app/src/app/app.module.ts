import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { ClosedCountNoPipe } from './bugs/pipes/closed-count-no.pipe';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountNoPipe
  ],
  imports: [
    BrowserModule, UtilsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

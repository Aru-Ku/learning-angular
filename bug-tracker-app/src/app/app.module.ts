import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { ClosedCountNoPipe } from './bugs/pipes/closed-count-no.pipe';
import { UtilsModule } from './utils/utils.module';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { BugDetailsComponent } from './bugs/components/bug-details/bug-details.component';

let routes : Routes = [
  {path: '', redirectTo: '/bugs', pathMatch: 'full' },
  {path : 'add', component : BugEditComponent},
  {path : 'bugs', component : BugsComponent},
  {path : 'details/:id', component : BugDetailsComponent},
  {path : 'projects', component : ProjectsComponent},
  {path : '**', component : NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountNoPipe,
    ProjectsComponent,
    BugDetailsComponent
  ],
  imports: [
    BrowserModule, UtilsModule, HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

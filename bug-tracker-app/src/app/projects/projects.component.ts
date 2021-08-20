import { Component, OnInit } from '@angular/core';
import { Project } from './models/project';
import { ProjectOperationService } from './services/project-operation.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];
  editingProjectId: number = null;
  
  constructor(private projOps: ProjectOperationService) { }

  ngOnInit(): void {
    this.projOps.getAll().subscribe((projects: Array<Project>) => this.projects = [ ...projects ])
  }

  newProject(projectName: string) : void {
    this.projOps.createNew(projectName).subscribe(newProject => {
      this.projects = [ ...this.projects, newProject ];
    });
  }

  deleteProject(project: Project) {
    this.projects = this.projects.filter((p: Project) => p.id !== project.id);
    this.projOps.remove(project);
  }

  editProjectId(projIdToEdit: number) {
    this.editingProjectId = projIdToEdit;
  }
  
  saveProjectNewName(newProjName : string) {
    this.projOps.createNew(newProjName, this.editingProjectId).subscribe((resProject: Project) => {
      this.projects = this.projects.map((project: Project) => project.id === resProject.id ? resProject : project);
      this.editingProjectId = 0;
    });
  }

}

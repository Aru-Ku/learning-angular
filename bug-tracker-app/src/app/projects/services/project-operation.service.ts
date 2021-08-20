import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { ProjectApiService } from "./project-api.service";

@Injectable({
    providedIn: 'root'
})
export class ProjectOperationService {
    constructor(private projApi: ProjectApiService) { }

    getAll() : Observable<Project[]> {
        return this.projApi.getAll();
    }

    createNew(projName: string, projectId: number = 0) : Observable<Project> {
        return this.projApi.save({
            id: projectId,
            name: projName
        })
    }

    remove(projectToRemove: Project) : void {
        this.projApi.delete(projectToRemove).subscribe(null);
    }

}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../models/project";

@Injectable({
    providedIn: 'root'
})
export class ProjectApiService {
    constructor(private http: HttpClient) { }

    getAll() : Observable<Array<Project>> {
        return this.http.get<Array<Project>>(`http://localhost:3000/projects`);
    }

    save(projectData: Project) : Observable<Project> {
        if (projectData.id === 0) {
			return this.http
				.post<Project>('http://localhost:3000/projects', projectData)
		} else {
			return this.http
				.put<Project>(`http://localhost:3000/projects/${projectData.id}`, projectData)
		}
    }

    delete(projectData: Project): Observable<any> {
		return this.http.delete<any>(`http://localhost:3000/projects/${projectData.id}`)
	}
}
import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from './shared/baseurl';
import { Proj } from './shared/proj';
import { PROJECTS } from './shared/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  get_projects(): Proj[] {
    return PROJECTS;
  }

  get_proj(id: string): Proj {
    return PROJECTS.filter((proj) => (proj.id === id))[0];
  }
}

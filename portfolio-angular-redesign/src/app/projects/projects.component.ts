import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Proj } from '../shared/proj';
import { PROJECTS } from '../shared/projects';
import { ProjectsService } from '../projects.service';
import { Observable } from 'rxjs';
import { projection } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Proj[] = PROJECTS;

  selectedProject: Proj;

  constructor(private _projectsService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._projectsService.get_projects();
  }

  onSelect(proj: Proj) {
    this.selectedProject = proj;
  }
}

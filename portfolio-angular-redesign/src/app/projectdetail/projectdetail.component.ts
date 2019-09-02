import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

import { Proj } from '../shared/proj';
import { ProjectsService } from '../projects.service';
import { Observable } from 'rxjs';
import { PROJECTS } from '../shared/projects';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  proj: Proj;
  projects: Proj[] = PROJECTS;

  constructor(private _projectsService: ProjectsService,
    private route: ActivatedRoute,
    private location: Location) {}

   ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.proj = this._projectsService.get_proj(id);
  }

  goBack(): void {
    this.location.back();
  }

}

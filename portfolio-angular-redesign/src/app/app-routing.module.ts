import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projectdetail/:id',
    component: ProjectdetailComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

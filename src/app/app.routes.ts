import { Routes } from '@angular/router';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ExperiencePageComponent } from '../pages/experience-page/experience-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { WorksPageComponent } from '../pages/works-page/works-page.component';
import { HomeLayoutComponent } from '../layout/home-layout/home-layout.component';
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {NotFoundComponent} from "../pages/not-found/not-found.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full',
      },
      {
        path: 'intro',
        component: HomePageComponent,
        pathMatch: 'full',
      },
      {
        path: 'about',
        component: AboutPageComponent,
        title: 'About',
        pathMatch: 'full',
      },
      {
        path: 'experience',
        component: ExperiencePageComponent,
        pathMatch: 'full',
      },
      {
        path: 'contact-us',
        component: ContactPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'works',
        component: WorksPageComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
      <router-outlet></router-outlet>
  `,
})
export class AppComponent {}

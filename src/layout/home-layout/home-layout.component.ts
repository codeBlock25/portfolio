import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <component-header />
    <main
      class="w-full h-fit min-h-fit max-w-[1200px] mx-auto pt-[60px] relative px-6"
    >
      <router-outlet></router-outlet>
      <component-footer />
    </main>
  `,
  styleUrl: './home-layout.component.css',
})
export class HomeLayoutComponent {}

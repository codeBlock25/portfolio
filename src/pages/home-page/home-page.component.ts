import { Component, OnDestroy } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  remixDribbbleLine,
  remixGithubFill,
  remixInstagramLine,
  remixLinkedinFill,
  remixStackOverflowLine,
} from '@ng-icons/remixicon';
import { NgOptimizedImage } from '@angular/common';
import { HeroComponent } from '../../contents/home/hero/hero.component';
import { SkillsComponent } from '../../contents/home/skills/skills.component';
import { ExploreComponent } from '../../contents/home/explore/explore.component';
import { IntroComponent } from '../../contents/home/intro/intro.component';
import { ProjectsComponent } from '../../contents/home/projects/projects.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  imports: [
    NgIconComponent,
    NgOptimizedImage,
    HeroComponent,
    SkillsComponent,
    ExploreComponent,
    IntroComponent,
    ProjectsComponent,
  ],
  providers: [
    provideIcons({
      remixLinkedinFill,
      remixGithubFill,
      remixInstagramLine,
      remixStackOverflowLine,
      remixDribbbleLine,
    }),
  ],
})
export class HomePageComponent implements OnDestroy {
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
  professions = ['web', 'mobile', 'backend', 'iot'] as const;

  profession: (typeof this.professions)[number] = 'web';

  stacks: { name: string; image: string }[] = [
    { name: 'React', image: '/assets/icons/react.png' },
    { name: 'Flutter', image: '/assets/icons/icons8-flutter-100.png' },
    { name: 'Rust', image: '/assets/icons/icons8-rust-100.png' },
    { name: 'Node.JS', image: '/assets/icons/icons8-node-js-100.png' },
    { name: 'Angular', image: '/assets/icons/icons8-angular-100.png' },
    { name: 'Svelte', image: '/assets/icons/icons8-svelte-100.png' },
    { name: 'React Native', image: '/assets/icons/react.png' },
    { name: 'Elixir', image: '/assets/icons/elixir.png' },
    { name: 'Dart', image: '/assets/icons/icons8-dart-100.png' },
    { name: 'C#', image: '/assets/icons/icons8-c-100.png' },
    { name: 'Blazor', image: '/assets/icons/blazor.png' },
    { name: 'Figma', image: '/assets/icons/icons8-figma-100.png' },
  ];

  socials: {
    name: string;
    icon: string;
    page: string;
  }[] = [
    {
      name: 'GIT',
      icon: 'remixGithubFill',
      page: 'https://github.com/codeBlock25',
    },
    {
      name: 'LINKEDIN',
      icon: 'remixLinkedinFill',
      page: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'INSTAGRAM',
      icon: 'remixInstagramLine',
      page: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'STACKOVERFLOW',
      icon: 'remixStackOverflowLine',
      page: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'DRIBBBLE',
      icon: 'remixDribbbleLine',
      page: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
  ];

  timer = setInterval(() => {
    const current = this.professions.indexOf(this.profession);
    if (current === this.professions.length - 1) {
      this.profession = this.professions[0];
    } else {
      this.profession = this.professions[current + 1];
    }
  }, 2000);
}

import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NgOptimizedImage } from '@angular/common';
import {
  remixDribbbleLine,
  remixGithubFill,
  remixInstagramLine,
  remixLinkedinFill,
  remixStackOverflowLine,
  remixSendPlane2Fill,
} from '@ng-icons/remixicon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-footer',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent, RouterLink],
  providers: [
    provideIcons({
      remixLinkedinFill,
      remixGithubFill,
      remixInstagramLine,
      remixStackOverflowLine,
      remixDribbbleLine,
      remixSendPlane2Fill,
    }),
  ],
  template: `
    <footer
      class="w-full self-center my-10 rounded-2xl p-6 h-fit min-h-fit flex flex-wrap justify-center py-10 items-start text-white"
    >
      <div class="flex justify-center lg:justify-between w-full items-center flex-wrap">
        <h2
          class="font-borel text-xl flex justify-center items-center relative top-3 w-full lg:w-fit text-center lg:text-left mb-4 lg:mb-0"
        >
          Daniel Amos
        </h2>
        <div class="flex px-1 py-2 self-center flex-wrap justify-center">
          @for (link of links; track link.name) {
            <a
              [routerLink]="link.link"
              class="text-md uppercase mx-2 hover:underline my-1"
            >
              {{ link.name }}
            </a>
          }
        </div>
        <div class="h-fit flex relative rounded-xl p-1 w-full lg:w-fit">
          <h2 class="text-xl uppercase font-bold w-full text-center lg:text-left">Let me reach out</h2>
        </div>
      </div>
      <div class="flex justify-between w-full items-center mt-0 lg:mt-4 flex-wrap">
        <h2
          class="text-xl w-full lg:w-fit mb-2 lg:my-0 text-center lg:text-left"
        >
          amosdaniel.dev&#64;gmail.com
        </h2>
        <div
          class="flex backdrop-blur-sm bg-white/10 rounded-full px-1 py-2 self-center mx-auto"
        >
          @for (social of socials; track social.name) {
            <a
              class="w-10 h-10 min-h-10 min-w-10 flex justify-center items-center mx-1 bg-black/50 rounded-full"
              href="{{ social.page }}"
              title="{{ social.name }}"
            >
              <ng-icon [name]="social.icon" class="text-xl"></ng-icon>
            </a>
          }
        </div>
        <div
          class="w-full lg:w-[280px] min-w-full lg:min-w-[280px] h-fit flex border-2 border-gray-500 relative rounded-xl p-1 my-2 lg:my-0"
        >
          <input
            type="text"
            placeholder="Your email address"
            class="flex flex-1 bg-transparent text-white pl-2 pr-1"
          />
          <button
            class="w-10 h-10 rounded-lg bg-white my-auto flex justify-center items-center"
          >
            <ng-icon
              name="remixSendPlane2Fill"
              color="black"
              class="text-xl"
            ></ng-icon>
          </button>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  links = [
    {
      name: 'Intro',
      link: '/intro',
    },
    {
      name: 'Experience',
      link: '/experience',
    },
    {
      name: 'Educations',
      link: '/eduction',
    },
    {
      name: 'Project',
      link: '/projects',
    },
    {
      name: 'Feedback',
      link: '/feedback',
    },
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
      name: 'STACK OVERFLOW',
      icon: 'remixStackOverflowLine',
      page: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'DRIBBBLE',
      icon: 'remixDribbbleLine',
      page: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
  ];
}

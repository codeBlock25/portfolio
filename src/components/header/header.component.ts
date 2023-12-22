import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixMenu3Line, remixDiscussLine } from '@ng-icons/remixicon';

@Component({
  selector: 'component-header',
  standalone: true,
  template: ` <nav
    class="w-[98%] md:w-fit self-center h-12 min-h-12 max-h-14 flex justify-between md:justify-center md:mt-6 z-[100] bg-black/40 md:rounded-full backdrop-blur-xl shadow-lg pl-6 pr-2"
  >
    <h2
      class=" w-fit min-w-fit h-full font-borel text-white text-xl md:text-2xl  flex justify-center relative top-[0.7rem] md:mr-4 items-center leading-10"
    >
      <a routerLink="/intro"> Daniel Amos </a>
    </h2>
    <div class="w-fit min-w-[280px] h-full px-1 hidden md:flex">
      @for (link of links; track link.name) {
        <a
          routerLink="{{ link.link }}"
          routerLinkActive="text-white/80 font-bold bg-white/10 px-6"
          class="px-2 h-4/5 my-auto rounded-full flex mx-1 flex-1 text-sm text-white font-inter items-center transition-all origin-center ease-in-out duration-300 hover:text-white/90 hover:bg-white/5 hover:px-6"
        >
          {{ link.name }}
        </a>
      }
    </div>
    <a
      class="w-fit h-4/5 my-auto hidden md:flex border-2 border-white/20 px-4 md:px-6 rounded-full shadow-lg
      text-md font-bold ml-2 font-inter
      items-center bg-transparent bg-gradient-to-r from-red-500 to-purple-500
      text-transparent bg-clip-text"
      routerLink="/contact-us"
      >Contact Us</a
    >
    <div class="flex md:hidden">
      <a
        routerLink="/contact-us"
        class="h-5/6 my-auto px-2 mr-2 flex rounded-md bg-white/10 justify-center items-center"
      >
        <ng-icon
          name="remixDiscussLine"
          color="white"
          class="text-2xl"
        ></ng-icon>
      </a>
      <a
        routerLink="/contact-us"
        class="h-5/6 my-auto px-2 flex rounded-md bg-white/10 justify-center items-center"
      >
        <ng-icon name="remixMenu3Line" color="white" class="text-2xl"></ng-icon>
      </a>
    </div>
  </nav>`,
  styles: `
  :host {
    position: absolute;
    top:0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  `,
  imports: [RouterLink, RouterLinkActive, NgIconComponent],
  providers: [
    provideIcons({
      remixMenu3Line,
      remixDiscussLine,
    }),
  ],
})
export class HeaderComponent {
  links: {
    name: string;
    link: string;
  }[];

  constructor() {
    this.links = [
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
  }
}

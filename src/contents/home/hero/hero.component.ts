import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  remixDribbbleLine,
  remixGithubFill,
  remixInstagramLine,
  remixLinkedinFill,
  remixStackOverflowLine,
} from '@ng-icons/remixicon';

@Component({
  selector: 'content-hero',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  providers: [
    provideIcons({
      remixLinkedinFill,
      remixGithubFill,
      remixInstagramLine,
      remixStackOverflowLine,
      remixDribbbleLine,
    }),
  ],
  template: `
    <section class="w-full h-fit min-h-fit py-10 px-4 flex flex-wrap">
      <div id="left" class="h-fit min-h-fit flex flex-col py-[50px] w-full order-2 md:w-1/2 md:order-1">
        <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight mb-2">
          Hi, I'm
          <span
            class="capitalize bg-transparent bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text font-borel"
            >Daniel Amos</span
          >,<br />
          @if (profession != 'iot') {
            a
          } @else {
            an
          }
          <span
            class="lowercase bg-transparent bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text font-borel"
            >{{ profession }}</span
          >
          developer
        </h2>

        <p class="text-white text-lg mb-4">
          with 10+ years professional experience solving problems with the
          software industry
        </p>
        <div class="flex mb-6">
          @for (social of socials; track social.name) {
            <a
              href="{{ social.page }}"
              title="{{ social.name }}"
              class="w-10 h-10 mx-1 rounded-lg outline-none border-2 border-white/30 flex justify-center items-center"
            >
              <ng-icon
                color="white"
                class="text-2xl"
                name="{{ social.icon }}"
              ></ng-icon>
            </a>
          }
        </div>
        <div class="w-full sm:w-[90%] grid gap-2 gap-y-4 my-4 mt-6">
          <button
            class="w-full h-12 grid col-span-6 items-center justify-center capitalize text-md text-white font-bold bg-gradient-to-r from-red-500 to-purple-500 rounded-full px-2"
          >
            Contact Me
          </button>
          <button
            class="w-full h-12 grid col-span-6 items-center justify-center capitalize text-md text-white font-bold from-red-500 to-purple-500 bg-clip-border rounded-full backdrop-blur-sm bg-white/10"
          >
            Schedule a meet
          </button>
          <button
            class="w-full h-12 grid col-span-12 items-center justify-center capitalize text-md text-transparent font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text border-2 border-white/80 px-2 rounded-full"
          >
            Let me to Reach-out
          </button>
        </div>
      </div>
      <div id="right" class="h-fit self-center justify-center flex w-full md:w-1/2 md:order-1">
        <div
          class="aspect-square w-[95%] min-w-[280px] sm:w-3/4 rounded-2xl backdrop-blur overflow-hidden relative"
        >
          <img
            ngSrc="../../../assets/images/Me2.jpeg"
            alt="Daniel Amos"
            fill="true"
            priority="true"
            class="object-cover object-top"
          />
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  @Input({
    required: true,
  })
  profession: 'web' | 'mobile' | 'backend' | 'iot' = 'web';

  @Input()
  socials?: {
    name: string;
    icon: string;
    page: string;
  }[];
}

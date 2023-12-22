import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'content-skills',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section
      class="w-full h-fit min-h-fit flex flex-col mt-0 justify-center items-center z-[2] relative"
    >
      <h2 class="text-2xl font-bold text-white">
        My Technology
        <span
          class="bg-transparent bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text"
          >Stack</span
        >
      </h2>
      <div
        class="rounded-2xl overflow-x-auto w-full h-fit py-4 px-2 backdrop-blur-sm my-4 bg-white/10 flex scroll-smooth snap-x snap-mandatory"
      >
        @for (stack of stacks; track stack.name) {
          <div
            class="w-[80px] h-[80px] min-w-[100px] min-h-[100px] flex flex-col justify-center items-center rounded-2xl bg-white/5 mx-2 snap-center"
          >
            <img
              ngSrc="{{ stack.image }}"
              alt="{{ stack.name }}"
              width="50"
              height="50"
              priority="true"
            />
            <h2 class="text-sm text-white/60">{{ stack.name }}</h2>
          </div>
        }
      </div>
    </section>
  `,
})
export class SkillsComponent {
  @Input()
  stacks?: {
    name: string;
    image: string;
  }[];
}

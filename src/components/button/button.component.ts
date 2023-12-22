import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowRightLine } from '@ng-icons/remixicon';

@Component({
  selector: 'component-button',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      remixArrowRightLine,
    }),
  ],
  template: `
      <button
              class="px-6 h-10 items-center rounded-lg py-0 my-4 font-bold text-white bg-gradient-to-r from-red-500 to-purple-500 mx-auto flex mt-6"
      >
          @if (position === 'start') {
              @if (icon) {
                  <ng-icon [name]="icon" class="mr-2"></ng-icon>
              }
          }
          {{ label }}

          @if (position === 'end') {
              @if (icon) {
                  <ng-icon [name]="icon" class="ml-2"></ng-icon>
              }
          }
      </button>
  `,
})
export class ButtonComponent {
  @Input({
    required: true,
  })
  label = '';

  @Input()
  position: 'start' | 'end' = 'end';

  @Input({
    required: false,
  })
  icon?: 'remixArrowRightLine';
}

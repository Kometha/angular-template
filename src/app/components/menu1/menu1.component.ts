import { Component } from '@angular/core';

@Component({
  selector: 'app-menu1',
  host: { class: 'block h-full w-full' },
  imports: [],
  standalone: true,
  template: `
    <div class="h-screen grid grid-cols-6 grid-rows-5 gap-4">
      <div class="bg-blue-500 col-span-2 row-span-2">1</div>
      <div class="bg-blue-500 col-span-2 row-span-2 col-start-3">2</div>
      <div class="bg-blue-500 col-span-2 row-span-2 col-start-5">3</div>
    </div>
  `,
  styleUrl: './menu1.component.scss',
})
export class Menu1Component {}

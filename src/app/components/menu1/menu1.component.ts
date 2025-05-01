import { Component } from '@angular/core';
import { FormVerticalComponent } from './components/form-vertical/form-vertical.component';
import { FormVerticalGridComponent } from './components/form-vertical-grid/form-vertical-grid.component';
import { FormHorizontalComponent } from './components/form-horizontal/form-horizontal.component';

@Component({
  selector: 'app-menu1',
  host: { class: 'block h-full w-full' },
  imports: [
    FormVerticalComponent,
    FormHorizontalComponent,
    FormVerticalGridComponent,
  ],
  standalone: true,
  template: `
    <div class="h-screen grid grid-cols-6 grid-rows-5 gap-3">
      <div
        class="text-left bg-neutral-800 col-span-3 row-span-2 col-start-4 row-start-1 p-6 rounded-xl"
      >
        <h1 class="text-2xl font-semibold mb-4">Form Horizontal</h1>
        <app-form-horizontal></app-form-horizontal>
      </div>
      <div
        class="text-left bg-neutral-800 col-span-3 row-span-2 col-start-4 row-start-3 p-6 rounded-xl"
      >
        5
      </div>
      <div
        class="text-left bg-neutral-800 col-span-3 row-span-3 col-start-1 row-start-1 p-6 rounded-xl"
      >
        <h1 class="text-2xl font-semibold mb-4">Form Vertical</h1>
        <app-form-vertical></app-form-vertical>
      </div>

      <div
        class="text-left bg-neutral-800 col-span-3 row-span-2 row-start-4 p-6 rounded-xl"
      >
        <h1 class="text-2xl font-semibold mb-4">Form Vertical Grid</h1>
        <app-form-vertical-grid></app-form-vertical-grid>
      </div>
      <div class="text-left bg-neutral-800 col-span-3 col-start-4 row-start-5 p-6 rounded-xl">
        8
      </div>
    </div>
  `,
  styleUrl: './menu1.component.scss',
})
export class Menu1Component {}

import { Component } from '@angular/core';
import { FormVerticalComponent } from './components/form-vertical/form-vertical.component';
import { FormVerticalGridComponent } from './components/form-vertical-grid/form-vertical-grid.component';
import { FormHorizontalComponent } from './components/form-horizontal/form-horizontal.component';
import { Button } from 'primeng/button';
import { FormTemplates } from './components/utils/code-forms';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormHelpTextComponent } from './components/form-help-text/form-help-text.component';
import { FormFloatLabelComponent } from './components/form-float-label/form-float-label.component';

@Component({
  selector: 'app-menu1',
  host: { class: 'block h-full w-full' },
  imports: [
    FormVerticalComponent,
    FormHorizontalComponent,
    FormVerticalGridComponent,
    FormHelpTextComponent,
    FormFloatLabelComponent,
    Button,
    Toast,
  ],
  standalone: true,
  providers: [MessageService],
  template: `
    <p-toast />
    <div class="h-screen grid grid-cols-6 grid-rows-5 gap-3">
      <div
        class="text-left bg-neutral-800 col-span-3 row-span-2 col-start-4 row-start-1 p-6 rounded-xl"
      >
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-semibold">Form Horizontal</h1>
          <p-button
            severity="contrast"
            icon="pi pi-copy"
            (onClick)="copyCode('FORM_HORIZONTAL')"
          ></p-button>
        </div>
        <app-form-horizontal></app-form-horizontal>
      </div>

      <div
        class="text-left bg-neutral-800 col-span-3 row-span-2 col-start-4 row-start-3 p-6 rounded-xl"
      >
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-2xl font-semibold">Form Float Label</h1>
          <p-button
            severity="contrast"
            icon="pi pi-copy"
            (onClick)="copyCode('FORM_FLOAT_LABEL')"
          ></p-button>
        </div>
        <app-form-float-label></app-form-float-label>
      </div>
      <div
        class="text-left bg-neutral-800 col-span-3 row-span-3 col-start-1 row-start-1 p-6 rounded-xl"
      >
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-semibold">Form Vertical</h1>
          <p-button
            severity="contrast"
            icon="pi pi-copy"
            (onClick)="copyCode('FORM_VERTICAL')"
          ></p-button>
        </div>
        <div>
          <app-form-vertical></app-form-vertical>
        </div>
      </div>

      <div
        class="text-left bg-neutral-800 col-span-3 row-span-2 row-start-4 p-6 rounded-xl"
      >
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-semibold mb-4">Form Vertical Grid</h1>
          <p-button
            severity="contrast"
            icon="pi pi-copy"
            (onClick)="copyCode('FORM_VERTICAL_GRID')"
          ></p-button>
        </div>

        <app-form-vertical-grid></app-form-vertical-grid>
      </div>
      <div
        class="text-left bg-neutral-800 col-span-3 col-start-4 row-start-5 p-6 rounded-xl"
      >
        <div class="flex items-center justify-between mb-2">
          <h1 class="text-2xl font-semibold mb-2">Form Help Text</h1>
          <p-button
            severity="contrast"
            icon="pi pi-copy"
            (onClick)="copyCode('FORM_HELP_TEXT')"
          ></p-button>
        </div>
        <app-form-help-text></app-form-help-text>
      </div>
    </div>
  `,
  styleUrl: './tablas-examples.component.scss',
})
export class TablasExamplesComponent {
  constructor(private messageService: MessageService) {}

  copyCode(
    templateType:
      | 'FORM_VERTICAL'
      | 'FORM_VERTICAL_GRID'
      | 'FORM_HORIZONTAL'
      | 'FORM_FLOAT_LABEL'
      | 'FORM_HELP_TEXT'
  ) {
    const template = FormTemplates[templateType];

    navigator.clipboard
      .writeText(template)
      .then(() => this.showSuccess())
      .catch((err) => console.error('Error al copiar:', err));
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: '¡Hecho!',
      detail: 'Template copiado correctamente.',
    });
  }
}

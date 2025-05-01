import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-form-float-label',
  imports: [FormsModule, InputTextModule, FloatLabel],
  template: `
    <div class="mb-5">
      <p-floatlabel variant="on">
        <input
          pInputText
          id="on_label"
          autocomplete="off"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <label for="on_label">Nombres</label>
      </p-floatlabel>
    </div>
    <div class="mb-5">
      <p-floatlabel variant="on">
        <input
          pInputText
          id="on_label"
          autocomplete="off"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <label for="on_label">Apellidos</label>
      </p-floatlabel>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Primera fila -->
      <div class="mb-5">
        <p-floatlabel variant="on">
          <input
            pInputText
            type="number"
            id="on_label"
            autocomplete="off"
            class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <label for="on_label">Edad</label>
        </p-floatlabel>
      </div>
      <div class="mb-5">
        <p-floatlabel variant="on">
          <input
            pInputText
            type="number"
            id="on_label"
            autocomplete="off"
            class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <label for="on_label">Salario</label>
        </p-floatlabel>
      </div>
    </div>
  `,
  styleUrl: './form-float-label.component.scss',
})
export class FormFloatLabelComponent {}

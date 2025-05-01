import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-form-vertical-grid',
  imports: [FormsModule, Select, InputTextModule],
  standalone: true,
  template: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Primera fila -->
      <div class="mb-5">
        <label for="firstname" class="block text-sm mb-2">Firstname</label>
        <input
          pInputText
          id="firstname"
          type="text"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div class="mb-5">
        <label for="lastname" class="block text-sm mb-2">Lastname</label>
        <input
          pInputText
          id="lastname"
          type="text"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Segunda fila -->
      <div class="mb-5">
        <label for="input1" class="block text-sm mb-2">Input 1</label>
        <input
          pInputText
          id="input1"
          type="text"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div class="mb-5">
        <label for="input2" class="block text-sm mb-2">Input 2</label>
        <input
          pInputText
          id="input2"
          type="text"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div class="mb-5">
        <label for="dropdown" class="block text-sm mb-2">Dropdown</label>
        <p-select
          [options]="cities"
          optionLabel="name"
          placeholder="Seleccione una opción del Dropdown"
          class="w-full"
        ></p-select>
      </div>
    </div> `,
  styleUrl: './form-vertical-grid.component.scss',
})
export class FormVerticalGridComponent {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
}

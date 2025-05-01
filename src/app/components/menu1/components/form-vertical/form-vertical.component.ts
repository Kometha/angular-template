import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-form-vertical',
  imports: [FormsModule, Select, InputTextModule],
  standalone: true,
  template: `
    <div class="mb-5">
      <label for="name" class="block text-sm mb-2">Nombre Completo</label>
      <input
        id="name"
        type="text"
        pInputText
        class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>
    <div class="mb-5">
      <label for="email" class="block text-sm mb-2">Email</label>
      <input
        id="email"
        type="email"
        pInputText
        class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>
    <div class="mb-5">
      <label for="age" class="block text-sm mb-2">Edad</label>
      <input
        id="age"
        type="number"
        pInputText
        class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>
    <div>
      <label for="age" class="block text-sm mb-2">Ciudades</label>
      <p-select
        [options]="cities"
        optionLabel="name"
        placeholder="Select a City"
        class="w-full"
      />
    </div>
  `,
  styleUrl: './form-vertical.component.scss',
})
export class FormVerticalComponent {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
}

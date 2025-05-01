import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form-horizontal',
  imports: [FormsModule, InputTextModule],
  standalone: true,
  template: `

    <div class="mb-5 flex items-center space-x-4">
      <div class="w-1/4">
        <label for="name" class="text-sm">Nombre completo:</label>
      </div>
      <div class="w-3/4">
        <input
          id="name"
          placeholder="Keneth Moises Cubas López"
          type="text"
          pInputText
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
    </div>

    <div class="mb-5 flex items-center space-x-4">
      <div class="w-1/4">
        <label for="name" class="text-sm">Correo Electrónico:</label>
      </div>
      <div class="w-3/4">
        <input
          id="name"
          placeholder="kometha@template.com"
          type="email"
          pInputText
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
    </div>
    <div class="mb-5 flex items-center space-x-4">
      <div class="w-1/4">
        <label for="name" class="text-sm">Contraseña</label>
      </div>
      <div class="w-3/4">
        <input
          id="name"
          placeholder="•••••••••••••••••"
          type="password"
          pInputText
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
    </div>
  `,
  styleUrl: './form-horizontal.component.scss',
})
export class FormHorizontalComponent {}

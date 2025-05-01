import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form-help-text',
  imports: [FormsModule, InputTextModule],
  standalone: true,
  template: `
    <div class="mb-5">
      <label for="name" class="block text-base mb-2">Usuario</label>
      <input
        id="name"
        type="text"
        pInputText
        class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <small id="username-help" class="text-green-400"
        >Escribe tu usuario para resetear tu contraseña.</small
      >
    </div>
  `,
  styleUrl: './form-help-text.component.scss',
})
export class FormHelpTextComponent {}

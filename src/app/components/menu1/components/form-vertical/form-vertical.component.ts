import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-form-vertical',
  imports: [FormsModule, Select, InputTextModule],
  standalone: true,
  templateUrl: './form-vertical.component.html',
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

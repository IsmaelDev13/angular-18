import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  firstName: string = 'Angular Project';
  angularVersion = 'Version 18';
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = 'button';
  selectedState: string = '';
  showWelcomeAlert() {
    alert('Welcome to Angular 18 Project');
  }

  showMessage(message: string) {
    alert(message);
  }
}
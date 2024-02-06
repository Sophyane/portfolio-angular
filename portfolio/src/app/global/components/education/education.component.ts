import { Component } from '@angular/core';
import { MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatPrefix, MatIcon],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {}

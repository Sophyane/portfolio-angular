import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { EducationComponent } from '../../components/education/education.component';
import { LangHobbiesComponent } from '../../components/lang-hobbies/lang-hobbies.component';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface ComponentDetail {
  name: string;
  label: string;
}

@Component({
  selector: 'app-details-container',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ExperienceComponent,
    EducationComponent,
    LangHobbiesComponent,
    RouterLink,
    NgFor,
    NgIf,
  
  ],
  templateUrl: './details-container.component.html',
  styleUrl: './details-container.component.scss',
})
export class DetailsContainerComponent {
  readonly componentDetails: ComponentDetail[] = [
    { name:'details-info-card',label:'Experience' },
    { name:'education',label:'Formation' },
    { name : 'lang-hobbies',label:'Langues & Centre d\'interet' }];
}

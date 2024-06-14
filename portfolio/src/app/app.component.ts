import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalContainerComponent } from './global/containers/global-container/global-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GlobalContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent { }

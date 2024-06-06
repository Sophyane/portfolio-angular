import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent { }

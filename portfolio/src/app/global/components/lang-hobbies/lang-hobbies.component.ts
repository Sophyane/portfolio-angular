import { Component } from '@angular/core';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { MatDivider } from '@angular/material/divider';
import { Hobby, Language } from '../../models/global.model';

@Component({
  selector: 'app-lang-hobbies',
  standalone: true,
  imports: [PickerComponent, FormsModule, NgIf, EmojiComponent, MatDivider],
  templateUrl: './lang-hobbies.component.html',
  styleUrl: './lang-hobbies.component.scss',
})
export class LangHobbiesComponent {
  languages: Language[] = [
    { name: 'français', emoji: 'baguette_bread', level: 'C2' },
    { name: 'anglais', emoji: 'male-guard', level: 'C1' },
    { name: 'arabe', emoji: 'camel', level: 'C2' },
    { name: 'italien', emoji: 'spaghetti', level: 'B1' },
  ];

  hobbies: Hobby[] = [
    { name: 'football', emoji: 'soccer' },
    { name: 'tennis', emoji: 'tennis' },
    { name: 'gaming', emoji: 'video_game' },
    { name: 'hiking', emoji: 'hiking_boot' },
    { name: 'art', emoji: 'art' },
    { name: 'surf-skate', emoji: 'skateboard' },
    { name: 'cinema', emoji: 'popcorn' },
    { name: 'guitare / Ukulele', emoji: 'guitar' },
  ];
}

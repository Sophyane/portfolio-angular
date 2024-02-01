import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT, NgClass, NgIf } from "@angular/common";
import { CoverComponent } from "../../components/cover/cover.component";

@Component({
  selector: "app-global-container",
  templateUrl: "./global-container.component.html",
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    CoverComponent
  ],
  styleUrls: ["./global-container.component.scss"]
})
export class GlobalContainerComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.isDarkMode = localStorage.getItem('isDarkMode') === 'true';
      this.updateBodyClass();
    }
  }

  toggleDarkMode() {
    if (typeof localStorage !== 'undefined') {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('isDarkMode', String(this.isDarkMode));
      this.updateBodyClass();
    }
  }

  private updateBodyClass() {
    const className = this.isDarkMode ? 'dark' : 'light';
    this.renderer.setAttribute(this.document.body, 'class', className);
  }
}

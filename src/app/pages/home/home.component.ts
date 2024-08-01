import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  texts: { text: string; color: string }[] = [
    { text: 'Welcome to Cricket Info!', color: 'text-red-500' },
    { text: 'Latest Scores and Highlights', color: 'text-green-500' },
    { text: 'Stay Updated with Live Matches', color: 'text-blue-500' },
  ];

  currentText = '';
  textIndex = 0;
  charIndex = 0;
  typing = true;

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter() {
    if (this.typing) {
      if (this.charIndex < this.texts[this.textIndex].text.length) {
        this.currentText += this.texts[this.textIndex].text.charAt(
          this.charIndex
        );
        this.charIndex++;
        setTimeout(() => this.typeWriter(), 100); // Adjust typing speed
      } else {
        this.typing = false;
        setTimeout(() => {
          this.charIndex = 0;
          this.currentText = '';
          this.textIndex = (this.textIndex + 1) % this.texts.length;
          this.typing = true;
          this.typeWriter();
        }, 2000); // Pause before next text
      }
    }
  }

  getCurrentTextColor(): string {
    return this.texts[this.textIndex]?.color || 'text-black'; // Default to black if no color is set
  }
}

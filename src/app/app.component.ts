import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog TecDev';
  isDark = true;

  toggleDarkMode() {
    this.isDark = !this.isDark;
    const root = document.documentElement;
    if (this.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}

import { Injectable, Inject } from '@angular/core';
import { JsonpInterceptor } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  setting: ISetting = {
    themeUrl: './assets/css/colors/default-dark.css',
    theme: 'default-dark',
  };

  constructor(@Inject(DOCUMENT) private myDocument) {
    this.getSetting();
  }

  getSetting() {
    if (localStorage.getItem('settings')) {
      this.setting = JSON.parse(localStorage.getItem('settings'));
      this.loadTheme(this.setting.theme);
    } else {
      this.loadTheme(this.setting.theme);
    }
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.setting));
  }

  loadTheme(color: string) {
    const url = `./assets/css/colors/${color}.css`;

    this.myDocument.getElementById('myTheme').setAttribute('href', url);

    this.setting.theme = color;
    this.setting.themeUrl = url;

    this.saveSettings();
  }
}

interface ISetting {
  themeUrl: string;
  theme: string;
}

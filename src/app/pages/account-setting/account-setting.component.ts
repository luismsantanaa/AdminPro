import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [],
})
export class AccountSettingComponent implements OnInit {
  constructor(public settingsService: SettingsService) {}

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(color: string, link: any) {
    this.aplicarCheck(link);
    this.settingsService.loadTheme(color);
  }

  aplicarCheck(link: any) {
    const selectors: any = document.getElementsByClassName('selector');

    for (let ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const selectors: any = document.getElementsByClassName('selector');

    const myTheme = this.settingsService.setting.theme;

    for (let ref of selectors) {
      if (ref.getAttribute('data-theme') == myTheme) {
        ref.classList.add('working');
        break;
      }
    }
  }
}

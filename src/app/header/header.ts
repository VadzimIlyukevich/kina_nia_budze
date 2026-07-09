import { Component, signal } from '@angular/core';
import { MenuElement } from '../models/menuList.module';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class Header {
  protected readonly menuList = signal<MenuElement[]>([{
      id: 'about',
      label: 'о нас',
      url: 'about'
    }
  ])
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    CommonModule,
    MenuListComponent
  ],
  providers: [MenuService],
  exports: [MenuListComponent]
})
export class MenuModule { }

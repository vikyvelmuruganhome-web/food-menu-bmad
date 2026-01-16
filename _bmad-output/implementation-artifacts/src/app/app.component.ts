import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu/components/menu-list/menu-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMAD3 - Food Menu';
}

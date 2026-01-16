import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent implements OnInit, OnDestroy {
  menuItems$: Observable<MenuItem[]>;
  private destroy$ = new Subject<void>();

  constructor(private menuService: MenuService) {
    this.menuItems$ = this.menuService.getMenuItems();
  }

  ngOnInit(): void {
    // Component initialized with menu items observable
    // Using OnPush change detection strategy for better performance
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Format price for display
   */
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }

  /**
   * TrackBy function for *ngFor optimization
   */
  trackByItemId(index: number, item: MenuItem): string {
    return item.id;
  }
}

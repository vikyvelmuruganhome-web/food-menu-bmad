import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private mockMenuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with house-made Caesar dressing, croutons, and Parmesan cheese',
      price: 12.99,
      category: 'Appetizers',
      imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      name: 'Grilled Salmon',
      description: 'Atlantic salmon fillet with lemon butter sauce, served with seasonal vegetables and rice',
      price: 24.99,
      category: 'Mains',
      imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      name: 'Margherita Pizza',
      description: 'Traditional Italian pizza with fresh mozzarella, basil, tomato sauce on thin crust',
      price: 16.99,
      category: 'Mains',
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop'
    },
    {
      id: '4',
      name: 'Pan-Seared Chicken Breast',
      description: 'Herb-marinated chicken breast with roasted potatoes and sautéed spinach',
      price: 18.99,
      category: 'Mains',
      imageUrl: 'https://images.unsplash.com/photo-1532636618426-7eab5e9f4d6e?w=300&h=200&fit=crop'
    },
    {
      id: '5',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, served with vanilla ice cream and fresh berries',
      price: 8.99,
      category: 'Desserts',
      imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&h=200&fit=crop'
    },
    {
      id: '6',
      name: 'Shrimp Appetizer',
      description: 'Butterflied shrimp with garlic aioli and fresh lemon',
      price: 14.99,
      category: 'Appetizers',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop'
    },
    {
      id: '7',
      name: 'Vegetarian Pasta',
      description: 'Penne pasta with seasonal vegetables, fresh basil, and light tomato cream sauce',
      price: 15.99,
      category: 'Mains',
      imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop'
    },
    {
      id: '8',
      name: 'Cheesecake',
      description: 'New York style cheesecake with strawberry compote and whipped cream',
      price: 7.99,
      category: 'Desserts',
      imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop'
    }
  ];

  constructor() { }

  /**
   * Get all menu items
   * Returns an Observable of MenuItem array
   * Currently uses mock data for MVP phase
   */
  getMenuItems(): Observable<MenuItem[]> {
    // Simulate async operation
    return of(this.mockMenuItems);
  }

  /**
   * Get a single menu item by ID
   */
  getMenuItemById(id: string): Observable<MenuItem | undefined> {
    const item = this.mockMenuItems.find(item => item.id === id);
    return of(item);
  }

  /**
   * Get menu items by category
   */
  getMenuItemsByCategory(category: string): Observable<MenuItem[]> {
    const items = this.mockMenuItems.filter(item => item.category === category);
    return of(items);
  }
}

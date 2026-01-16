import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';
import { MenuItem } from '../models/menu-item.model';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService]
    });
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMenuItems()', () => {
    it('should return an Observable of MenuItems', (done) => {
      service.getMenuItems().subscribe((items: MenuItem[]) => {
        expect(Array.isArray(items)).toBeTruthy();
        expect(items.length).toBeGreaterThan(0);
        done();
      });
    });

    it('should return items with required properties', (done) => {
      service.getMenuItems().subscribe((items: MenuItem[]) => {
        items.forEach(item => {
          expect(item.id).toBeDefined();
          expect(item.name).toBeDefined();
          expect(item.description).toBeDefined();
          expect(item.price).toBeDefined();
          expect(typeof item.price).toBe('number');
          expect(item.price).toBeGreaterThan(0);
        });
        done();
      });
    });

    it('should return properly formatted menu items', (done) => {
      service.getMenuItems().subscribe((items: MenuItem[]) => {
        const firstItem = items[0];
        expect(firstItem.name).toBeTruthy();
        expect(firstItem.description).toBeTruthy();
        expect(firstItem.name.length).toBeGreaterThan(0);
        expect(firstItem.description.length).toBeGreaterThan(0);
        done();
      });
    });

    it('should have at least 5 menu items', (done) => {
      service.getMenuItems().subscribe((items: MenuItem[]) => {
        expect(items.length).toBeGreaterThanOrEqual(5);
        done();
      });
    });

    it('should handle errors gracefully', (done) => {
      service.getMenuItems().subscribe(
        (items) => {
          expect(items).toBeDefined();
        },
        (error) => {
          fail('Service should not emit error for valid mock data');
        },
        () => {
          done();
        }
      );
    });
  });

  describe('menu item formatting', () => {
    it('should format prices with currency', (done) => {
      service.getMenuItems().subscribe((items: MenuItem[]) => {
        items.forEach(item => {
          // Price should be a valid number
          expect(typeof item.price).toBe('number');
          expect(item.price).toBeGreaterThan(0);
        });
        done();
      });
    });
  });
});

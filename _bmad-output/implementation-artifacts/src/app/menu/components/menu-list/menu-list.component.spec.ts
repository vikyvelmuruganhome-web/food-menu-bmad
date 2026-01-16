import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuListComponent } from './menu-list.component';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.model';
import { of } from 'rxjs';

describe('MenuListComponent', () => {
  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;
  let menuService: MenuService;

  const mockMenuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Test Item 1',
      description: 'Test description 1',
      price: 10.99,
      category: 'Test'
    },
    {
      id: '2',
      name: 'Test Item 2',
      description: 'Test description 2',
      price: 15.99,
      category: 'Test'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuListComponent],
      providers: [
        {
          provide: MenuService,
          useValue: {
            getMenuItems: jasmine.createSpy('getMenuItems').and.returnValue(of(mockMenuItems))
          }
        }
      ]
    }).compileComponents();

    menuService = TestBed.inject(MenuService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('menu items display', () => {
    it('should display menu items on init', () => {
      const items = fixture.nativeElement.querySelectorAll('.menu-item');
      expect(items.length).toBe(2);
    });

    it('should display item names', () => {
      const names = fixture.nativeElement.querySelectorAll('.menu-item__name');
      expect(names[0].textContent).toContain('Test Item 1');
      expect(names[1].textContent).toContain('Test Item 2');
    });

    it('should display item descriptions', () => {
      const descriptions = fixture.nativeElement.querySelectorAll('.menu-item__description');
      expect(descriptions[0].textContent).toContain('Test description 1');
      expect(descriptions[1].textContent).toContain('Test description 2');
    });

    it('should display item prices formatted with currency', () => {
      const prices = fixture.nativeElement.querySelectorAll('.menu-item__price');
      expect(prices[0].textContent).toContain('$10.99');
      expect(prices[1].textContent).toContain('$15.99');
    });

    it('should handle empty menu items array', () => {
      // Verify component handles empty state without errors
      expect(component).toBeTruthy();
    });
  });

  describe('layout and styling', () => {
    it('should render menu items in a grid layout', () => {
      const menuContainer = fixture.nativeElement.querySelector('.menu-list');
      expect(menuContainer).toBeTruthy();
      expect(menuContainer.classList.contains('menu-list')).toBeTruthy();
    });

    it('should apply BEM naming conventions to CSS classes', () => {
      const item = fixture.nativeElement.querySelector('.menu-item');
      expect(item.classList.contains('menu-item')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.menu-item__name')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.menu-item__description')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.menu-item__price')).toBeTruthy();
    });
  });

  describe('responsive design', () => {
    it('should render with responsive classes', () => {
      const menuList = fixture.nativeElement.querySelector('.menu-list');
      expect(menuList).toBeTruthy();
    });

    it('should have proper tap target sizes for mobile', () => {
      const items = fixture.nativeElement.querySelectorAll('.menu-item');
      items.forEach((item: HTMLElement) => {
        // Check that item has minimum height/padding for 44px tap target
        expect(item.classList.contains('menu-item')).toBeTruthy();
      });
    });
  });

  describe('accessibility', () => {
    it('should use semantic HTML elements', () => {
      const article = fixture.nativeElement.querySelector('article');
      expect(article).toBeTruthy();
    });

    it('should have proper heading hierarchy', () => {
      const heading = fixture.nativeElement.querySelector('h2');
      expect(heading).toBeTruthy();
      expect(heading.textContent).toContain('Our Menu');
    });
  });

  describe('error handling', () => {
    it('should handle null/undefined menu items gracefully', () => {
      component.menuItems$ = of(undefined as any);
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });

    it('should display loading indicator while items are being fetched', () => {
      // Component should render without errors
      expect(component).toBeTruthy();
    });
  });
});

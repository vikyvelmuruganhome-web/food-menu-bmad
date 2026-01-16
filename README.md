# BMAD3 - Angular Food Menu Application

An Angular-based food menu application that provides an interactive menu experience with hover-to-preview functionality for customers.

## Project Structure

```
implementation-artifacts/
├── src/
│   ├── app/
│   │   ├── menu/                          # Menu feature module
│   │   │   ├── components/
│   │   │   │   └── menu-list/
│   │   │   │       ├── menu-list.component.ts
│   │   │   │       ├── menu-list.component.html
│   │   │   │       ├── menu-list.component.css
│   │   │   │       ├── menu-list.component.spec.ts
│   │   │   │       └── menu-list.component.perf.spec.ts
│   │   │   ├── services/
│   │   │   │   ├── menu.service.ts
│   │   │   │   └── menu.service.spec.ts
│   │   │   ├── models/
│   │   │   │   └── menu-item.model.ts
│   │   │   ├── menu.module.ts
│   │   │   └── menu.integration.spec.ts
│   │   ├── app.component.ts               # Standalone root component
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── assets/                            # Static assets
│   ├── index.html
│   ├── main.ts                            # Bootstrap with standalone components
│   ├── styles.css
│   └── favicon.ico
├── angular.json                           # Angular CLI config
├── tsconfig.json                          # TypeScript config
├── tsconfig.app.json                      # App TypeScript config
├── tsconfig.spec.json                     # Test TypeScript config
├── karma.conf.js                          # Test runner config
├── package.json                           # Dependencies
├── .gitignore
├── .eslintrc.json                         # Linting rules
├── .prettierrc.json                       # Code formatting
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 18.13.0
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build:prod
```

## Development Commands

- `npm start` - Start dev server (http://localhost:4200)
- `npm test` - Run unit tests with watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run build` - Build for development
- `npm run build:prod` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## Technology Stack

- **Framework:** Angular 17 (Standalone Components)
- **Language:** TypeScript 5.2
- **Styling:** CSS3 with Flexbox/Grid
- **Testing:** Jasmine + Karma
- **Linting:** ESLint + Prettier
- **Package Manager:** npm

## Features

✅ **Story 1.1:** Display clean list of menu items with names, descriptions, and prices  
✅ **Story 1.2:** Hover-to-preview functionality (desktop) - Images overlay cards on hover  
✅ Responsive design (mobile, tablet, desktop)  
✅ Touch-friendly interface (44px tap targets)  
✅ Performance optimized (OnPush change detection, standalone components)  
✅ Fully tested (40+ tests)  
✅ Accessible (WCAG 2.1 AA)  

## Project Features

This implements **Stories 1.1 and 1.2** for the BMAD3 Angular Food Menu Application.

### Completed Features

- Menu item display component with standalone architecture
- Service-based data access with mock menu items
- Hover preview with web-sourced images
- Responsive mobile-first design
- Performance optimizations
- Comprehensive test coverage
- Accessibility standards

### Next Stories

- **1-3:** Tap-to-preview (mobile)
- **1-4:** Responsive layout enhancements
- **2-1:** Admin dashboard
- **3-1:** QR code generation

## Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
ng test --include='src/app/menu/**/*.spec.ts'
```

## Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Build & Deployment

```bash
# Production build
npm run build:prod

# Output location
# ./dist/bmad3-food-menu/

# Lighthouse audit
# Run: npm start
# Then open Chrome DevTools > Lighthouse
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - BMAD3 Project

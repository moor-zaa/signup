# Authentication App

## ✨ Features

- 🔐 **Two-Step Authentication**: Email or phone number with OTP verification
- 🌍 **Multi-Language Support**: English and Persian (Farsi) with RTL/LTR switching
- 🎨 **Theme Support**: Light and dark mode toggle
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ♿ **Accessible**: ARIA labels and semantic HTML
- 🎯 **Type-Safe**: Full TypeScript implementation
- 🧩 **Component-Based**: Modular and reusable components
- 🪝 **Custom Hooks**: Clean separation of logic and UI

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd signup
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── theme-script.tsx     # Theme initialization script
│   └── welcome/             # Welcome page route
│
├── components/              # React components
│   ├── auth/               # Authentication components
│   │   ├── form-container.tsx    # Main auth form
│   │   ├── tab-toggle.tsx        # Email/Phone tab switcher
│   │   ├── auth-card.tsx         # Auth wrapper card
│   │   ├── agree-terms.tsx       # Terms agreement
│   │   ├── third-party-login.tsx # Social login options
│   │   └── auth.types.ts         # Type definitions
│   │
│   ├── navbar/             # Navigation components
│   │   ├── navbar.tsx           # Main navigation bar
│   │   ├── lang-switcher.tsx    # Language switcher
│   │   └── theme-toggle.tsx     # Theme toggle button
│   │
│   └── welcome/            # Welcome page components
│
├── hooks/                   # Custom React hooks
│   └── useSignin.hook.ts   # Authentication logic hook
│
├── i18n/                    # Internationalization
│   ├── config.ts           # i18n configuration
│   ├── dictionary-provider.tsx  # Dictionary context
│   ├── get-dictionary.ts   # Dictionary loader
│   ├── types.ts            # i18n type definitions
│   └── dictionaries/       # Translation files
│       ├── en.json         # English translations
│       └── fa.json         # Persian translations
│
├── theme/                   # Theme management
│   ├── theme-provider.tsx  # Theme context provider
│   ├── theme.type.ts       # Theme type definitions
│   └── useTheme.hook.ts    # Theme hook
│
└── ui/                      # Reusable UI components
    ├── inputs/
    │   ├── credential-input.tsx  # Email/Phone input
    │   └── otp-input.tsx         # OTP code input
    └── message/
        └── error-message.tsx     # Error display component
```

## 🎯 Key Features

### Internationalization (i18n)

- Automatic language detection from cookies
- Full RTL support for Persian (Farsi)
- Language switching without page reload
- Direction-aware icons and layouts

### Theme System

- Persistent theme preference (stored in localStorage)
- Smooth theme transitions
- Custom CSS variables for consistent styling

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[Phosphor Icons](https://phosphoricons.com/)** - Icon library

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Adding New Languages

1. Create a new dictionary file in `i18n/dictionaries/`:
```json
// i18n/dictionaries/es.json
{
  "email": "Correo electrónico",
  "phone": "Teléfono",
  // ... more translations
}
```

2. Update the locale configuration in `i18n/config.ts`:
```typescript
export const locales = ["en", "fa", "es"] as const;

export const localeConfig = {
  en: { dir: "ltr", name: "English" },
  fa: { dir: "rtl", name: "فارسی" },
  es: { dir: "ltr", name: "Español" },
} as const;
```

3. Update the dictionary loader in `i18n/get-dictionary.ts`:
```typescript
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  fa: () => import("./dictionaries/fa.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
};
```

## 🎨 Customization

### Theme Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  /* ... more variables */
}

[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  /* ... more variables */
}
```

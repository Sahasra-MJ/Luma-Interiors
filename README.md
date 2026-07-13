# Luma Interiors

A responsive 4-page website for a fictional interior design studio, built
with **React**, **React Router**, and plain **CSS** — no UI framework, no
build-time theming, just straightforward components.

**Live demo:** _add your deployed link here (Vercel / Netlify / GitHub Pages)_

## Pages

| Page     | Route       | What's on it                                             |
|----------|-------------|------------------------------------------------------------|
| Home     | `/`         | Navbar, hero banner, welcome section, 3 feature cards        |
| About    | `/about`    | Studio intro, mission, vision, "why choose us" (3 reasons)     |
| Services | `/services` | 4 service cards, each with an image, name, and description       |
| Contact  | `/contact`  | Contact form (name, email, phone, message) with validation, address, footer |

## Tech stack

- [React](https://react.dev/) 18
- [React Router](https://reactrouter.com/) for client-side navigation
- Plain CSS (`src/index.css`) — no Tailwind or CSS-in-JS
- [Vite](https://vitejs.dev/) as the dev server / build tool

## Folder structure

```
luma-react-simple/
├── public/                  static assets (favicon, icons)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        shared nav bar with mobile menu toggle
│   │   └── Footer.jsx         shared footer
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx        service data as an array, rendered with .map()
│   │   └── Contact.jsx           form state + validation with useState
│   ├── App.jsx                 route definitions
│   ├── main.jsx                  app entry point, wraps App in BrowserRouter
│   └── index.css                   all styling, shared across every page
├── index.html
├── package.json
└── vite.config.js
```

## How it works

- **Routing** — `App.jsx` defines four routes with `react-router-dom`.
  `Navbar` uses `NavLink`, which automatically highlights the current page.
- **Mobile menu** — a single `useState(false)` in `Navbar.jsx`, toggled on
  click, no extra libraries.
- **Services page** — service data (name, description, image) lives in one
  array at the top of `Services.jsx` and is rendered with `.map()`, so
  adding a new service is a one-line change.
- **Contact form** — one `useState` per field plus an `errors` object.
  `handleSubmit` validates all four fields (checks for empty values and a
  valid email pattern) and shows a success message once the form passes.
- **Styling** — a single `index.css` file with plain CSS classes, applied
  through `className` in JSX. Responsive behavior comes from CSS Grid /
  Flexbox plus one media query for the mobile nav.

## Getting started

```bash
git clone https://github.com/<your-username>/luma-interiors.git
cd luma-interiors
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Design notes

- Palette: warm ivory background, deep ink text, a muted brass accent used
  for links, buttons, and hover states.
- Layout is deliberately simple: one column of sections on Home/About/
  Contact, a responsive card grid on Services.
- Images are sourced from Unsplash for placeholder purposes; swap them out
  in `src/pages/*.jsx` for real project photography.

## License

This project is open source and available for learning purposes.

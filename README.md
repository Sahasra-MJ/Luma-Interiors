# Luma Interiors — 4-Page Responsive Website (React, simple version)

React + React Router, plain CSS (no Tailwind, no design-token setup) —
kept close to what you'd hand-write in a couple of hours.

## Folder structure

```
luma-react-simple/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     shared nav bar, useState for mobile menu
│   │   └── Footer.jsx     shared footer
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx     services list built from a simple array + .map()
│   │   └── Contact.jsx        useState per field + one validate function
│   ├── App.jsx              routes
│   ├── main.jsx               entry point, BrowserRouter
│   └── index.css                one plain CSS file, shared by all pages
├── index.html
└── package.json
```

## How it works

- Routing: App.jsx defines four <Route>s. Navbar uses NavLink, which
  automatically adds an "active" class to the current page's link.
- Mobile menu: one useState boolean in Navbar.jsx, toggled on click.
- Services page: service data lives in a small array at the top of
  Services.jsx and is rendered with .map() instead of four near-identical
  hand-written blocks.
- Contact form: one useState per field, plus an errors object.
  handleSubmit checks each field, sets errors if anything's missing or
  invalid, and shows a success message if the form is clean.
- Styling: a single index.css (no Tailwind, no config) applied via
  className in JSX.

## Running it

npm install
npm run dev       # start dev server
npm run build     # production build to /dist

Requires Node.js 18+.

# Technical Portfolio

A responsive, terminal-inspired personal portfolio built with HTML, vanilla CSS, and JavaScript.

## Structure

- `index.html` - page structure and content
- `css/style.css` - all styling and responsive rules
- `js/script.js` - project accordion, contact modal, and current year

## Before publishing

Open `js/script.js` and replace the placeholder values in `contactConfig`:

```js
const contactConfig = {
  email: 'YOUR_EMAIL@example.com',
  whatsappNumber: '60123456789',
  whatsappDisplay: '+60 12-345 6789'
};
```

For WhatsApp, use the country code without `+`, spaces, or hyphens.

## Run locally

Open `index.html` directly in a browser, or use the VS Code Live Server extension.

## GitHub Pages

Push the project to a GitHub repository, then open **Settings > Pages** and deploy from the `main` branch root.

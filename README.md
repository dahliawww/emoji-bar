# Emoji Bar

A beautiful React project featuring an interactive emoji bar inspired by [realfood.gov](https://realfood.gov/). Hover over the badge to see random emojis appear with smooth animations and color transitions.

## Features

- 🎨 Interactive emoji bar with hover effects
- 🎲 Random emoji selection (4 different styles)
- 🎭 Smooth slide-up and slide-down animations
- 🎨 Dynamic background color changes
- 📱 Fully responsive design for mobile and desktop
- ⚡ Built with React 18 and Vite

## Demo

Hover over the badge to see:

- Random emoji appears from bottom to top
- Background color changes dynamically
- Smooth animations with cubic-bezier easing
- No duplicate emojis on consecutive hovers

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Project Structure

```
emoji-header/
├── src/
│   ├── components/
│   │   ├── OfficialBanner.jsx
│   │   ├── OfficialBanner.css
│   │   ├── EmojiHeader.jsx
│   │   ├── EmojiHeader.css
│   │   ├── EmojiItem.jsx
│   │   └── EmojiItem.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Technologies

- React 18
- Vite
- CSS3 (with animations and transitions)
- Geist Mono font

## Credits

Inspired by [https://realfood.gov/](https://realfood.gov/)  
Created by Cursor

## License

MIT

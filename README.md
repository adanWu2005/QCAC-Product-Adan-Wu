# Keychron K6 Pro Product Page

A modern, responsive product page showcasing the **Keychron K6 Pro QMK/VIA Wireless Mechanical Keyboard**. Built with React and Vite, this application demonstrates a clean UI/UX with local data persistence using localStorage.

## Description

This project is a fully functional product landing page that presents the Keychron K6 Pro mechanical keyboard. The page includes:

- **Product Overview**: Displays the product name, image, description, and key highlights
- **Features Section**: Showcases 6 key features of the keyboard in a clean card layout
- **Customer Reviews**: Displays sample reviews and user-submitted reviews
- **Add Review Form**: Allows users to submit reviews that are saved to localStorage and displayed instantly

All user-submitted reviews persist in the browser's localStorage, ensuring data remains available across sessions.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher) - comes with Node.js

You can verify your installations by running:
```bash
node --version
npm --version
```

## Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd QCAC-Product-Adan-Wu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will be available at `http://localhost:5173` (or the port shown in your terminal)

## Technologies Used

- **React 18** - UI library for building component-based interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **localStorage API** - Browser storage for persisting user reviews

## Project Structure

```
QCAC-Product-Adan-Wu/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Product Overview component
│   │   ├── Features.jsx      # Features section component
│   │   ├── Reviews.jsx       # Reviews display and management
│   │   └── ReviewForm.jsx    # Review submission form
│   ├── App.jsx               # Main application component
│   ├── App.css               # Global styles and component styles
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## Features

### Product Overview
- Responsive product image with fallback placeholder
- Comprehensive product description
- Key highlights (layout, connectivity, switches)

### Features Section
- 6 feature cards with detailed descriptions:
  - Wireless & Wired Connectivity
  - QMK/VIA Programmability
  - Hot-Swappable Switches
  - Enhanced Typing Experience
  - Premium Build Quality
  - Multi-Platform Compatibility

### Customer Reviews
- 3 pre-loaded sample reviews
- User-submitted reviews stored in localStorage
- Star rating display (1-5 stars)
- Instant review display after submission

### Review Form
- Form validation (name, rating, message)
- Error handling and user feedback
- Success message on submission
- Data persistence in localStorage

## Challenges

1. **localStorage Integration**: Implementing a seamless localStorage system that combines sample reviews with user-submitted reviews while maintaining proper data structure and avoiding duplicates.

2. **Responsive Design**: Creating a mobile-first, responsive layout that works seamlessly across all device sizes while maintaining visual hierarchy and readability.

3. **Form Validation**: Building a robust form validation system that provides clear error messages and prevents invalid submissions.

4. **State Management**: Managing component state effectively to ensure new reviews appear instantly without page refresh while maintaining data consistency.

5. **Image Handling**: Implementing proper image fallback mechanisms for external product images that may fail to load.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Browser Compatibility

This application works in all modern browsers that support:
- ES6+ JavaScript features
- localStorage API
- CSS Grid and Flexbox

Tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Reviews are stored in localStorage under the key `keychronK6Reviews`
- Sample reviews are hardcoded and always displayed
- User-submitted reviews persist across browser sessions
- The product image uses an external URL with a fallback placeholder

## License

This project is created for assessment purposes.

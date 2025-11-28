# Keychron K6 Pro Product Page

For my QCAC product assessment, the product I have chosen is one that is a real item. It is a **Keychron K6 Pro QMK/VIA Wireless Mechanical Keyboard**. This project is developed with React and Vite and shows a clean UI/UX, preserving local data using localStorage.

## Description

This application is a functional product showcase page, presenting the Keychron K6 Pro mechanical keyboard. The page includes:

- **Product Overview**: Displays the product name, image, description, and key highlights
- **Features Section**: Showcases 6 key features of the keyboard in a clean card layout
- **Customer Reviews**: Displays sample reviews and user-submitted reviews
- **Add Review Form**: Form which allows users to submit reviews baded on their opinions on the item. All reviews are saved in local storage.

Reviews will remain in the local storage of the browser, making sure data is still available across sessions.

## Prerequisites

Ensure the following is installed:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher) - comes with Node.js

Verify installations of the following by running:
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
- A responsive image of the product with a fallback placeholder
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

1. **localStorage Integration**: Ensuring the localStorage system is stable and working, combining the three sample reviews with any reviews submitted by the user, whilst also maintaining proper data structure.

2. **Responsive Design**: Ensuring a responsive layout that works flawlessly across every possible device size.

3. **Form Validation**: Providing clear error messages for invalid submissions of the form using a robust validation system.

4. **State Management**: Ensuring state is effectively managed to insure instant rendering of new reviews while maintaining consistancy within the data.

5. **Image Handling**: Proper image fallback mechanisms are implemented for images that may fail to load.

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


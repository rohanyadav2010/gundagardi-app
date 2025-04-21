# Gundagardi Literature App

A modern web and mobile application built with React and Tailwind CSS that provides solutions for Hindi literature - including stories, poems, and a Hindi dictionary.

## Features

- **User Authentication**: Secure login system with different access levels
- **Modern UI with Glassmorphism**: Beautiful interface with glassmorphism effects, animations, and responsive design
- **Stories Collection**: Chapter-wise stories with questions and answers
- **Poems Collection**: Complete poems with detailed explanations and question-answer sections
- **Hindi Dictionary**: Search functionality for Hindi words with meanings
- **Copy Feature**: Easy copying of answers for educational purposes
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable reading
- **Multi-platform Support**: Available on Web and Android, with iOS, macOS, Windows, and Linux versions coming soon
- **Feedback System**: Integrated feedback collection with rating system and admin dashboard

## Platforms

### Currently Available
- **Web Version**: Access directly through your browser
- **Android App**: Download the APK from our website

### Coming Soon
- iOS App
- macOS App
- Windows App
- Linux App

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion (for animations)
- React Router (for navigation)
- Lucide React (for icons)
- SheetDB (for feedback data storage)

## Getting Started

### Web Version

Visit our website to use the application directly in your browser.

### Android Version

1. Visit the Downloads page on our website
2. Click the "Download for Android" button
3. Install the APK file on your Android device
4. Allow installation from unknown sources if prompted

### Development Setup

#### Prerequisites

- Node.js (v14+)
- npm or yarn

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/rohanyadav2010/gundagardi-app.git
cd gundagardi-app
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

To build the app for production:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist` directory.

## Project Structure

```
gundagardi-app/
├── public/
│   └── gundagardi-app.apk   # Android application package
├── src/
│   ├── components/          # UI Components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Page footer with version badge
│   │   ├── Home.jsx         # Homepage component
│   │   ├── StoriesPage.jsx  # Stories listing page
│   │   ├── StoryDetail.jsx  # Individual story view with Q&A
│   │   ├── PoemsPage.jsx    # Poems listing page
│   │   ├── PoemDetail.jsx   # Individual poem view with Q&A
│   │   ├── Dictionary.jsx   # Hindi dictionary component
│   │   ├── LoginPage.jsx    # Authentication component
│   │   ├── AppDownload.jsx  # App download information
│   │   ├── Feedback.jsx     # User feedback component
│   │   ├── DataLog.jsx      # Admin feedback dashboard
│   │   └── ...              # Other components
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies and scripts
```

## Login Credentials

For demo purposes, you can use the following credentials:
- Username: `gunda` / Password: `gundagardi`
- Username: `admin` / Password: `admin` (for admin access)

## Features in Detail

### Stories and Poems
- Complete text with author information
- Category-based organization
- Comprehensive questions and answers
- Copy to clipboard functionality

### Dictionary
- Search for Hindi words and meanings
- Recent searches history
- Clean and intuitive interface

### Feedback System
- Star rating mechanism
- Category selection for feedback type
- Message submission with optional contact information
- Admin dashboard for reviewing feedback

### UI/UX
- Glassmorphism effects throughout the interface
- Smooth animations and transitions
- Responsive design that works on all devices
- Dark/light mode toggle

## Version Information

Current version: v3.00 Stable

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributors

- Rohan Yadav - Lead Developer

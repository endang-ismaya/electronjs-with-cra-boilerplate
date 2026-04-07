# Electron.js with Create React App Boilerplate

A boilerplate project for building desktop applications with Electron and React.

## Features

- ⚛️ **React 16** - UI components
- 📦 **Electron 39** - Cross-platform desktop app framework
- 🔧 **Create React App 5** - Modern build tooling
- 🛡️ **Security Patches Applied** - Dependencies kept up-to-date

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

## Installation

```bash
npm install
```

## Available Scripts

### Development

```bash
npm run dev
```
Starts the React development server and Electron app concurrently.

### React Only

```bash
npm start
```
Runs just the React app in development mode.

### Build

```bash
npm run build
```
Creates an optimized production build of the React app.

### Testing

```bash
npm test
```
Launches the test runner in interactive watch mode.

### Package Application

```bash
npm run package-win
```
Packages the app for Windows (64-bit).

## Project Structure

```
electronjs-with-cra-boilerplate/
├── public/           # Static assets
├── src/              # React source code
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## Security Updates

Recent security patches applied:

- **react-scripts**: 3.3.0 → 5.0.1
- **electron**: 7.1.5 → 39.8.5
- **wait-on**: 3.3.0 → 9.0.4
- **electron-packager**: Updated to latest compatible version

All 9 Dependabot security PRs have been merged.

## Development Notes

- The `ELECTRON_DISABLE_SECURITY_WARNINGS` is set to `true` in development mode
- Default development URL: `http://localhost:3000/`
- The app automatically waits for the React dev server before launching Electron

## License

Private

## Author

endang.ismaya

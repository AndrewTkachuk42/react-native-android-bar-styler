# react-native-android-bar-styler

A React Native library for styling Android system bars (status bar and navigation bar) with the new architecture (Turbo Modules). This library provides a simple way to customize the appearance of both system bars on Android devices.

> **Note**: This library only works with the new React Native architecture and is Android-only.

## Requirements

- React Native 0.71.0 or higher
- New Architecture enabled
- Android only (no effect on iOS)

## Installation

```sh
npm install react-native-android-bar-styler
```

## Usage

The library provides several methods to customize the system bars:

```typescript
import {
  setStatusBarColor,
  setNavigationBarColor,
  setStatusBarStyle,
  setNavigationBarStyle,
  setSystemBarsStyle,
} from 'react-native-android-bar-styler';

// Simple color change
setStatusBarColor('#FF0000'); // Sets status bar to red
setNavigationBarColor('#00FF00'); // Sets navigation bar to green

// With animation
setStatusBarColor('#FF0000', true, 300); // Animated color change with 300ms duration

// Using style options object
setStatusBarStyle({
  color: '#FF0000',
  isAnimated: true,
  duration: 300,
});

// Change both bars at once
setSystemBarsStyle({
  color: '#FF0000',
  isAnimated: true,
  duration: 300,
});
```

### API Reference

#### Simple Methods
- `setStatusBarColor(color: string, isAnimated?: boolean, duration?: number)`
- `setNavigationBarColor(color: string, isAnimated?: boolean, duration?: number)`

#### Style Options Methods
- `setStatusBarStyle(options: BarStyleOptions)`
- `setNavigationBarStyle(options: BarStyleOptions)`
- `setSystemBarsStyle(options: BarStyleOptions)`

#### Content Style Methods
- `setStatusBarContentStyle(isLight?: boolean)` - Sets the status bar content (icons/text) to light or dark theme
- `setNavigationBarContentStyle(isLight?: boolean)` - Sets the navigation bar content (buttons) to light or dark theme
- `setSystemBarsContentStyle(isLight?: boolean)` - Sets both status and navigation bar content to light or dark theme

#### Types

```typescript
type BarStyleOptions = {
  color: string;        // Color in hex format (e.g., '#FF0000'). Defaults to black.
  isAnimated?: boolean; // Whether to animate the color change. Defaults to true.
  duration?: number;    // Animation duration in milliseconds. Defaults to 300ms.
};
```

#### Example with Content Style

```typescript
import {
  setStatusBarContentStyle,
  setNavigationBarContentStyle,
  setSystemBarsContentStyle,
} from 'react-native-android-bar-styler';

// Set light content (white icons) for dark backgrounds
setStatusBarContentStyle(true);

// Set dark content (black icons) for light backgrounds
setNavigationBarContentStyle(false);

// Set both bars to light content
setSystemBarsContentStyle(true);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

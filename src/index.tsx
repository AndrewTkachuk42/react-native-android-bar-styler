import AndroidBarStyler from './NativeAndroidBarStyler';

export type BarStyleOptions = {
  color: string;
  isAnimated?: boolean;
  duration?: number;
};

export function setStatusBarColor(
  color: string,
  isAnimated?: boolean,
  duration?: number
): void {
  AndroidBarStyler.setStatusBarColor(color, isAnimated, duration);
}

export function setNavigationBarColor(
  color: string,
  isAnimated?: boolean,
  duration?: number
): void {
  AndroidBarStyler.setNavigationBarColor(color, isAnimated, duration);
}

export function setStatusBarStyle(options: BarStyleOptions): void {
  AndroidBarStyler.setStatusBarStyle(options);
}

export function setNavigationBarStyle(options: BarStyleOptions): void {
  AndroidBarStyler.setNavigationBarStyle(options);
}

export function setSystemBarsStyle(options: BarStyleOptions): void {
  AndroidBarStyler.setSystemBarsStyle(options);
}

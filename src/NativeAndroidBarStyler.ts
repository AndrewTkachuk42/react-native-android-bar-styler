import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

type BarStyleOptions = {
  color: string;
  isAnimated?: boolean;
  duration?: number;
};

export interface Spec extends TurboModule {
  setStatusBarColor(
    color: string,
    isAnimated?: boolean,
    duration?: number
  ): void;
  setNavigationBarColor(
    color: string,
    isAnimated?: boolean,
    duration?: number
  ): void;
  setStatusBarStyle(options: BarStyleOptions): void;
  setNavigationBarStyle(options: BarStyleOptions): void;
  setSystemBarsStyle(options: BarStyleOptions): void;
  setStatusBarContentStyle(isLight?: boolean): void;
  setNavigationBarContentStyle(isLight?: boolean): void;
  setSystemBarsContentStyle(isLight?: boolean): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AndroidBarStyler');

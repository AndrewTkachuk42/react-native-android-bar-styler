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
}

export default TurboModuleRegistry.getEnforcing<Spec>('AndroidBarStyler');

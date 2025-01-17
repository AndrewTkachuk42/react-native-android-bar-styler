import { useCallback } from 'react';
import {
  setNavigationBarColor,
  setNavigationBarStyle,
  setSystemBarsStyle,
  setSystemBarsContentStyle,
} from 'react-native-android-bar-styler';
import {
  setStatusBarColor,
  setStatusBarStyle,
} from 'react-native-android-bar-styler';

import { randomColor } from './utils';

export const useApp = () => {
  const handleSetStatusBarColor = useCallback(() => {
    setStatusBarColor(randomColor());
  }, []);

  const handleSetNavigationBarColor = useCallback(() => {
    setNavigationBarColor(randomColor(), true, 1000);
  }, []);

  const handleSetStatusBarStyle = useCallback(() => {
    setStatusBarStyle({
      color: randomColor(),
    });
  }, []);

  const handleSetNavigationBarStyle = useCallback(() => {
    setNavigationBarStyle({
      color: randomColor(),
    });
  }, []);

  const handleSetSystemBarsStyle = useCallback(() => {
    const options = {
      color: randomColor(),
      isAnimated: true,
      duration: 1000,
    };

    setSystemBarsStyle(options);
  }, []);

  const setLightContentStyle = useCallback(() => {
    setSystemBarsContentStyle(true);
  }, []);

  const setDarkContentStyle = useCallback(() => {
    setSystemBarsContentStyle(false);
  }, []);

  return {
    setStatusBarColor: handleSetStatusBarColor,
    setStatusBarStyle: handleSetStatusBarStyle,
    setNavigationBarStyle: handleSetNavigationBarStyle,
    setNavigationBarColor: handleSetNavigationBarColor,
    setSystemBarsStyle: handleSetSystemBarsStyle,
    setLightContentStyle,
    setDarkContentStyle,
  };
};

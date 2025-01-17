import { View, StyleSheet, Button } from 'react-native';

import { useApp } from './useApp';

const strings = {
  statusBarColor: 'Status Bar Color',
  navigationBarColor: 'Navigation Bar Color',
  statusBarStyle: 'Status Bar Style',
  navigationBarStyle: 'Navigation Bar Style',
  systemBarsStyle: 'Both Bars',
};

export default function App() {
  const {
    setStatusBarColor,
    setStatusBarStyle,
    setNavigationBarStyle,
    setNavigationBarColor,
    setSystemBarsStyle,
  } = useApp();

  return (
    <View style={styles.container}>
      <Button title={strings.statusBarColor} onPress={setStatusBarColor} />
      <Button
        title={strings.navigationBarColor}
        onPress={setNavigationBarColor}
      />
      <Button title={strings.statusBarStyle} onPress={setStatusBarStyle} />
      <Button
        title={strings.navigationBarStyle}
        onPress={setNavigationBarStyle}
      />
      <Button title={strings.systemBarsStyle} onPress={setSystemBarsStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
});

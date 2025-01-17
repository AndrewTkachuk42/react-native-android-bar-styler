import { View, StyleSheet, Button } from 'react-native';

import { useApp } from './useApp';
import { strings } from './constants/strings';

export default function App() {
  const {
    setStatusBarColor,
    setStatusBarStyle,
    setNavigationBarStyle,
    setNavigationBarColor,
    setSystemBarsStyle,
    setLightContentStyle,
    setDarkContentStyle,
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
      <Button
        title={strings.setLightContentStyle}
        onPress={setLightContentStyle}
      />
      <Button
        title={strings.setDarkContentStyle}
        onPress={setDarkContentStyle}
      />
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

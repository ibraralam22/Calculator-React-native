import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: darkTheme ? colors.dark : colors.light,
      }}
    >
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={darkTheme ? colors.light : colors.dark}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('Ibrar');

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  const getColor = (light, dark) => (darkTheme ? colors.dark : colors.light);
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
        alignItems: 'center',
      }}
    >
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.light, colors.dark)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
        }}
      >
        {result}
      </Text>
    </View>
  );
}

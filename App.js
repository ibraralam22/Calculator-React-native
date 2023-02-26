import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('Display');

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  const Btn = ({ title }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark2),
        height: 70,
        width: 70,
        margin: 16,
      }}
    >
      <Text
        style={{
          fontSize: 37,
          color: 'black',
          textAlign: 'center',
          textAlignVertical: 'center',
          // color:
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getColor = (light, dark) => (darkTheme ? dark : light);
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
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Btn title={'7'} />
        <Btn title={'8'} />
        <Btn title={'9'} />
        <Btn title={'%'} />
        <Btn title={'4'} />
        <Btn title={'5'} />
        <Btn title={'6'} />
        <Btn title={'-'} />
        <Btn title={'1'} />
        <Btn title={'2'} />
        <Btn title={'3'} />
        <Btn title={'+'} />
        <Btn title={'00'} />
        <Btn title={'0'} />
        <Btn title={'.'} />
        <Btn title={'='} />
      </View>
    </View>
  );
}

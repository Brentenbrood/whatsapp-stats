import * as React from 'react';
import { StyleSheet } from 'react-native';
import TutorialScreenInfo from '../components/TutorialScreenInfo';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';

export default function TutorialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Load your chat</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TutorialScreenInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import * as React from 'react';
import { StyleSheet } from 'react-native';

import Graph from '../components/chatdata/Graph';
import { Text, View } from '../components/Themed';

export default function GraphScreen() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
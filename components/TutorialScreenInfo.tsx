import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import InitParse from '../components/chatdata/InitParse';
const WhatsappParser = require('whatsapp-chat-parser');

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import tutorialImage1 from '../assets/images/tutorial_1.jpg';

export default function TutorialScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Image source={tutorialImage1} style={{ width: 305, height: 300 }} />
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Select a chat, open the menu in the upper-right corner, select More, Export Chat and choose to open with Whatsapp Stats.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <Text>
          Or alternatively, select your chat file by pressing the button below.
        </Text>
        <TouchableOpacity
          onPress={OpenTextFile}
          style={ styles.parseButton }>
          <Text style={{ fontSize: 28, color: '#fff' }}>Select a chat file</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function OpenTextFile() {
    DocumentPicker.getDocumentAsync({
      type: 'text/plain'
    }).then(( result ) => {
      //console.log(result.uri);
      FileSystem.readAsStringAsync(result.uri).then((fileContents) => {
        InitParse(fileContents);
    });
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  parseButton: {
    textAlign: 'center',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#25D366'
  }
});

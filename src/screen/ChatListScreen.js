import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import color from '../config/color';

const ChatListScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.capsule}>
        <Text style={{color: color.white, fontWeight: 'bold'}}>Online</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_color,
    flex: 1,
    padding: 24,
  },

  capsule: {
    borderColor: color.text_color_grey,
    borderWidth: 1,
    padding: 4,
    alignItems: 'center',
    width: '20%',
    paddingHorizontal: 4,
    backgroundColor: color.dark_green,
    borderRadius: 20,
  },
});

export default ChatListScreen;

import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar, TextInput } from 'react-native';
import Colors from '~/constants/colors';
import useVoiceRecognition from '~/hooks/useVoice';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const { result, start, stop, isListening } = useVoiceRecognition();

  const handleVoiceToggle = async () => {
    if (isListening) {
      await stop();
      setNote(result);
    } else {
      await start();
    }
  };

  const handleSave = () => {
    console.log('Note saved...');
    // db integration later
  };

  useEffect(() => {
    if (result) {
      setNote(result);
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{ flex: 1, padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Create Your Note</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.titleText}>Title: </Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="Enter your title here..."
              style={styles.input}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'NunitoBlackItalic',
    color: Colors.textPrimary,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'NunitoBold',
  },
  input: {
    backgroundColor: Colors.white,
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
});

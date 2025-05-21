import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '~/constants/colors';
import useVoiceRecognition from '~/hooks/useVoice';

export default function Home() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const { result, start, stop, isListening } = useVoiceRecognition();

  const handleVoiceToggle = async () => {
    if (isListening) {
      await stop();
    } else {
      await start();
    }
  };

  const handleSave = () => {
    console.log('Note saved:', { title, note });
    // TODO: Save to database or local storage
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Create Your Note</Text>
          </View>

          <View style={styles.bodyContainer}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="Enter your title..."
              style={styles.input}
            />

            <Text style={styles.label}>Note:</Text>
            <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="Type or use voice to enter your note..."
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              style={[styles.input, styles.noteInput]}
            />

            <TouchableOpacity
              onPress={handleVoiceToggle}
              style={[styles.button, isListening ? styles.buttonActive : null]}>
              <Text style={styles.buttonText}>
                {isListening ? 'Listening... Tap to Stop' : 'Tap to Speak'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSave} style={styles.button}>
              <Text style={styles.buttonText}>Save Note</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  headerContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'NunitoBlackItalic',
    color: Colors.textPrimary,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: 'NunitoBold',
    color: Colors.textPrimary,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    fontFamily: 'Nunito',
  },
  noteInput: {
    minHeight: 120,
  },
  button: {
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: Colors.buttonSecondary,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'NunitoBold',
  },
});

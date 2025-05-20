import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import Colors from '~/constants/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{ flex: 1, padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>VoiceBook Notes</Text>
        </View>
        <View style={styles.bodyContainer}>{/* Display created notes here */}</View>
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
    fontWeight: 'bold',
    color: Colors.textPrimary,
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  bodyContainer: {},
});

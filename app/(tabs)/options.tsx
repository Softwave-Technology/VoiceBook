import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Colors from '~/constants/colors';

export default function Options() {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{ flex: 1, padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Settings</Text>
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
});

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

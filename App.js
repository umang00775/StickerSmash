import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceHolderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceHolderImage} />
      </View>
      <View style={styles.footerContainer} >
        <Button label="Choose a photo" theme="primary" style={styles.button} />
        <Button label="Use this photo" style={styles.button} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  
});

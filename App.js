import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mybutton from './src/component/Button/MyButton'; 

export default function App() {

  const  changeName= () => {
    console.log('press button');
  }
   
  return (
    <View style={styles.container}>
      <Text>Click it will show something on console!</Text>
      <StatusBar style="auto" />
      <Mybutton title={'Click it'} onPress={()=>changeName()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

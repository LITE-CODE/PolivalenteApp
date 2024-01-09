import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const InitialPage = () => {
    return (
        <View style={styles.container}>
            <Text>initial page</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default InitialPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
import { StyleSheet, Text, View } from 'react-native';

import * as InmoArSdkRn from 'inmo-ar-sdk.rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{InmoArSdkRn.hello()}</Text>
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

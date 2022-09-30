import react from 'react';
import { StyleSheet, View } from 'react-native';
import Detalhes from './components/Detalhes.js';
import Topo from './components/Topo.js';

function Cesta() {
  return (
    <>
      <Topo />
      <View style={styles.cesta}>
        <Detalhes />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Cesta;

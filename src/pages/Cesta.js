import react from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Text style={styles.titulo}>Detalhes da cesta</Text>

      <View style={styles.cesta}>
        <Text style={styles.nome}>Cesta de Verduras</Text>
        <View style={styles.fazenda}>
          <Image source={logo} style={styles.imagemFazenda} />
          <Text style={styles.nomeFazenda}>Jenny Jack Farms</Text>
        </View>
        <Text style={styles.descrica}>
          ma cesta com produtos selecionados cuidadosamente da fazendo direto
          para a sua cozinha
        </Text>
        <Text style={styles.preco}>R$ 40,00</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  titulo: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'MontserratBold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'MontserratRegular',
  },
  descrica: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

export default Cesta;

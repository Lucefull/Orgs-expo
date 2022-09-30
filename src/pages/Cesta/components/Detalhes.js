import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../components/Texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
  return (
    <>
      <Texto style={styles.nome}>Cesta de Verduras</Texto>
      <View style={styles.fazenda}>
        <Image source={logo} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>Jenny Jack Farms</Texto>
      </View>
      <Texto style={styles.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazendo direto
        para a sua cozinha
      </Texto>
      <Texto style={styles.preco}>R$ 40,00</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
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
  },
  descricao: {
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

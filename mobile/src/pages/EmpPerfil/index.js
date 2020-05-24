import React, {useState, useEffect} from 'react';
import {SafeAreaView, Image, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import styles from './styles';

export default Params => {
  const dados = Params;
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('(65)3381 1892');
  const [segmento, setSegmento] = useState('X');
  const [descricao, setDescricao] = useState(
    'Empresa voltada para o segimento X, buscando novos funcionarios com perfil X',
  );

  useEffect(() => setNome(`Empresa ${dados.route.params.item}`), [
    dados.route.params.item,
  ]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.areaImage}>
          <Image
            style={styles.stretch}
            source={{
              uri:
                'https://www.biocentro.net.br/wp-content/uploads/bb-plugin/cache/profissional-empresa-avatar-biocentro-curitiba-600x600-square.png',
            }}
          />
        </View>
        <TextInput
          onChange={text => setNome(text)}
          style={styles.input}
          value={nome}
          label="Nome Empresa"
          mode="outlined"
        />

        <TextInput
          onChange={text => setContato(text)}
          style={styles.input}
          label="Contato"
          value={contato}
          mode="outlined"
        />
        <TextInput
          onChange={text => setContato(text)}
          style={styles.input}
          label="Segmento"
          value={segmento}
          mode="outlined"
        />
        <TextInput
          multiline={true}
          onChange={text => setContato(text)}
          style={styles.inputMult}
          label="Descrição"
          value={descricao}
          mode="outlined"
          numberOfLines={4}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

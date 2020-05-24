import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {TextInput, Text, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setsenha] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.inicialText}>Bem vindo!</Text>
        <TextInput
          style={styles.input}
          label="Login"
          mode="outlined"
          value={login}
          onChangeText={text => setLogin(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          mode="outlined"
          value={senha}
          secureTextEntry={true}
          onChangeText={text => setsenha(text)}
        />
        <Button
          mode="text"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Entrar
        </Button>
        <Button
          mode="text"
          onPress={() => {
            navigation.navigate('CadastroUser');
          }}>
          Cadastrar
        </Button>
      </View>
    </SafeAreaView>
  );
};

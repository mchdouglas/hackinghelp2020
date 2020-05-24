import React, {useState} from 'react';
import {
  SafeAreaView,
  Alert,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Button, Text} from 'react-native-paper';
import styles from './styles';

export default () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('Marlon Rodrigues');
  const [date, setDate] = useState('28/12/1990');
  const [formacao, setFormacao] = useState('Ensino superior incompleto');
  const [contato, setContato] = useState('(65)98888555');
  const [senha, setSenha] = useState('a1b2c3');
  const [login, setLogin] = useState('marlon2020');

  async function movePost() {
    try {
      Alert.alert('Cadastro realizado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.areaImage}>
          <Image
            style={styles.stretch}
            source={{
              uri:
                'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
            }}
          />
          <Button style={styles.buttonImage} mode="text" onPress={() => {}}>
            Mudar imagem
          </Button>
        </View>
        <TextInput
          style={styles.input}
          value={nome}
          label="Nome completo"
          mode="outlined"
        />
        <TextInput
          value={date}
          style={styles.input}
          label="Data de nascimento"
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          value={formacao}
          label="Formação"
          mode="outlined"
        />
        <View style={styles.allRadio}>
          <Text style={styles.textRadio}>Atributos: </Text>
          <View style={styles.radioGroup}>
            <Text style={styles.sizeRadio}>Pontual</Text>
            <TouchableOpacity style={styles.circle} />
          </View>
          <View style={styles.radioGroup}>
            <Text style={styles.sizeRadio}>Dedicado</Text>
            <TouchableOpacity style={styles.circle}>
              <View style={styles.checkedCircle} />
            </TouchableOpacity>
          </View>
          <View style={styles.radioGroup}>
            <Text style={styles.sizeRadio}>Proativo</Text>
            <TouchableOpacity style={styles.circle}>
              <View style={styles.checkedCircle} />
            </TouchableOpacity>
          </View>
          <View style={styles.radioGroup}>
            <Text style={styles.sizeRadio}>Comunicativo</Text>
            <TouchableOpacity style={styles.circle}>
              <View style={styles.checkedCircle} />
            </TouchableOpacity>
          </View>
          <View style={styles.radioGroup}>
            <Text style={styles.sizeRadio}>Disponivel</Text>
            <TouchableOpacity style={styles.circle}>
              <View style={styles.checkedCircle} />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          label="Contato"
          value={contato}
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          value={login}
          label="Login"
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          value={senha}
          label="Senha"
          mode="outlined"
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            movePost();
          }}>
          Finalizar
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

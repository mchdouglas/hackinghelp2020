import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, SafeAreaView, Alert, Image} from 'react-native';
import {Text, Appbar, Button} from 'react-native-paper';

import styles from './styles';

export default () => {
  const navigation = useNavigation();

  function Alerta() {
    Alert.alert('Ainda não há conferência marcadas.');
  }
  return (
    <SafeAreaView>
      <Appbar.Header style={styles.navBar}>
        <Image
          style={styles.stretch}
          source={{
            uri:
              'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
          }}
        />
        <Button mode="contained" onPress={() => navigation.navigate('Perfil')}>
          Marlon Rodrigues
        </Button>
        <View style={styles.icons}>
          <Appbar.Action
            icon="logout"
            onPress={() => navigation.navigate('InicialScreen')}
          />
        </View>
      </Appbar.Header>
      <View>
        <Text style={{alignSelf: 'center', justifyContent: 'center'}}>
          Bem vindo a sala de conferência.
        </Text>
      </View>
      <Button onPress={() => Alerta()}>Verificar</Button>
    </SafeAreaView>
  );
};

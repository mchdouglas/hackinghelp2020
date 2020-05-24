import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, View, FlatList} from 'react-native';
import {Card, Text, Button} from 'react-native-paper';

import styles from './styles';

export default () => {
  const navigation = useNavigation();
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <SafeAreaView>
      <View>
        <View style={styles.navBar}>
          <View style={styles.nameImage}>
            <Image
              style={styles.stretch}
              source={{
                uri:
                  'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
              }}
            />
            <Text style={styles.navText}>Marlon Rodrigues</Text>
          </View>
          <Button
            icon={{
              uri:
                'https://www.pngfind.com/pngs/m/339-3396821_png-file-svg-download-icon-logout-transparent-png.png',
            }}
            onPress={() => navigation.navigate('InicialScreen')}
          />
        </View>
        <FlatList
          style={styles.flatList}
          data={list}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <Card style={styles.card}>
              <View style={styles.separador}>
                <View>
                  <Image
                    style={styles.stretch}
                    source={{
                      uri:
                        'https://www.biocentro.net.br/wp-content/uploads/bb-plugin/cache/profissional-empresa-avatar-biocentro-curitiba-600x600-square.png',
                    }}
                  />
                  <Text>Empresa {item}</Text>
                </View>
                <View style={styles.desc}>
                  <Text>Descrição:</Text>
                  <Text>Empresa do ramos X</Text>
                </View>
              </View>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

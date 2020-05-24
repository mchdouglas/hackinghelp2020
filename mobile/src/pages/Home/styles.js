import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    flex: 1,
  },
  navBar: {
    backgroundColor: '#3498db',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nameImage: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  navText: {
    fontSize: 18,
    marginLeft: 15,
  },
  flatList: {
    margin: 5,
  },
  stretch: {
    margin: 5,
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  },
  card: {
    width: '97%',
    height: 70,
    borderRadius: 2,
    backgroundColor: '#D3D3D3',
    marginBottom: 5,
  },
  separador: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  desc: {
    alignSelf: 'center',
  },
});

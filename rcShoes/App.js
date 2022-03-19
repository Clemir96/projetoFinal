import React from 'react';
import { View, StyleSheet,  TouchableOpacity, Text, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ImageBackground } from 'react-native';

const App = () => {
  return ( 
    <ImageBackground source={require('./src/imagemLogin.jpg')} 
      style={styles.imageBackground}>

      <View>
        <TouchableOpacity style={styles.repostCadastro}>
          <Text style={styles.decoraCadastro}>
          Cadastre-se e ganhe descontos especiais !!!
          </Text>
          <Icon name="user" size={20} color='#FFCE29' style={styles.posicionaLogin}/>
        </TouchableOpacity>
      </View>

      <View style={styles.bordaNome}>
        <Text style={styles.nomeLoja}>
          RCshoes
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.areaPesquisar}>
          <Text style={styles.decoraPesquisar}>
           Pesquisar
          </Text>
          <Icon name="search1" size={20} color='#FFCE29' style={styles.posicionaSearch}/>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}
export default App;



const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%', 
    height: '100%',
  },
  repostCadastro: {
    backgroundColor: '#4F4F4F',
    borderRadius: 20,
    width: 350,
    height: 30,
    bottom: 200,
  },
  decoraCadastro: {
    color: '#FFF',
    marginLeft: 10,
    marginTop: 4,
  },
  posicionaLogin: {
    textAlign: 'right',
    marginRight: 10,
    bottom: 20,
  },
  bordaNome: {
    borderRadius: 150,
    width: 150,
    height:150,
    backgroundColor: '#4F4F4F',
    bottom: 150,
  },
  nomeLoja: {
    color: '#FFCE29', 
    fontSize: 30,
    top: 55,
    textAlign: 'center', 
  },
  areaPesquisar: {
    backgroundColor: '#4F4F4F',
    borderRadius: 20,
    width: 300,
    height: 30,
    top: 200,
  },
  decoraPesquisar: {
    color: '#FFF',
    marginLeft: 10,
    marginTop: 4,
  },
  posicionaSearch: {
    textAlign: 'right',
    marginRight: 10,
    bottom: 20,
  },
})
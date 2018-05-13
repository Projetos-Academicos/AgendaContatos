import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
// import Header from '../componentes/Header';
import ListaContatos from '../componentes/ListaContatos';
import axios from 'axios';

/*
    Importado por: App;
*/


export default class TelaListaContatos extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pessoas: [],
      carregando: false,
      erro: false,
    };
  };

  componentDidMount(){
    this.setState({carregando: true});
    setTimeout(() => {
        axios
      .get('https://randomuser.me/api/?nat=br&results=15')
      .then(response => {
        // const x = response.data.results - SEM DESTRUCTING
        const {results} = response.data; // - COM DESTRUCTING
        this.setState({
          pessoas: results,
          carregando: false,
        });      
      }).catch(error => {
          this.setState({carregando:false, erro: true});
      });
    }, 1500);
  };

  /*
    Checa se o "carregando == true" para poder exibir o carregando na página 
    em seguida checa se houve algum erro na requisição .get do axios, caso "erro == true"
    exibe uma mensagem de erro simples, caso contrário  finalmente exibe a lista de contatos
    corretamente;
  */
  decidindoView(){
    if(this.state.carregando){
      return <ActivityIndicator size="large" color="#414146" />;
    }else{
      if(this.state.erro){
        return <Text style={styles.erro}>Ops... Algo deu errado, entre em contato com o suporte técnico</Text>
      }else{ 
        return <ListaContatos pessoas = {this.state.pessoas} onPressItemLista = {parametroPagina => {
          this.props.navigation.navigate("DetalhesContato", parametroPagina);      
      }} />;
      }
    }
  }

  render() {          
    return (         
      <View style={styles.container}>          
       { this.decidindoView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    erro:{
      fontSize: 20,
      color: "red",
      alignSelf: "center",
      // textAlign: "center",
     
    },
});
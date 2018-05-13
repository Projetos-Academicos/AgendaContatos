import React from 'react';
import { Text, View } from 'react-native';
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
      pessoas: []
    };
  };

  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=15')
    .then(response => {
      // const x = response.data.results - SEM DESTRUCTING
      const {results} = response.data; // - COM DESTRUCTING
      this.setState({
        pessoas: results
      });      
    })
  };

  render() {    
    //    this.props.navition.navigate("chave da pagina, state")
    //   this.props.navigation.navigate("DetalhesContato");      
    return (         
      <View>      
        <ListaContatos pessoas = {this.state.pessoas} onPressItemLista = {parametroPagina => {
            this.props.navigation.navigate("DetalhesContato", parametroPagina);      
        }} />
      </View>
    );
  }
}
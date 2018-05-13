import React from 'react';
import { Text, View } from 'react-native';
// import Header from '../componentes/Header';
import ListaPessoas from '../componentes/ListaPessoas';
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
    .get('https://randomuser.me/api/?nat=br&results=5')
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
        <ListaPessoas pessoas = {this.state.pessoas} onPressItemLista = {() =>{
            this.props.navigation.navigate("DetalhesContato");      
        }} />
      </View>
    );
  }
}
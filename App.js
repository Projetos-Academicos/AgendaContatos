import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/Header';
import ListaPessoas from './src/componentes/ListaPessoas';
import axios from 'axios';

export default class App extends React.Component {
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
    
    return (         
      <View>
        <Header titulo = "Contatos" />   
        <ListaPessoas pessoas = {this.state.pessoas} />
      </View>
    );
  }
}
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListaPessoas = props => {
    const {pessoas} = props;
    const listNomes = pessoas.map((pessoa, index) => {
      const primeiroNome = pessoa.name.first; //SEM DESTRUCTING
      return (
        <View style={styles.linha} key = {index}>
            <Text style={styles.nomes}>{primeiroNome}</Text>
        </View>
    )
    });

    return(
        <View style={styles.lista}>
            {listNomes}
        </View>
    );
}

const styles = StyleSheet.create({
    lista: {
        backgroundColor: "#dcdcdc",
    },    
    linha: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",        
        alignItems: "center",
        flexDirection: "row",
    },
    nomes:{
        fontSize: 20,
        padding: 5,       

    }
});

export default ListaPessoas;

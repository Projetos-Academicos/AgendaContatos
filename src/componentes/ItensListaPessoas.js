import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PrimeiraLetraMaiuscula} from '../utils';

const ItensListaPessoas = props => {
    const {pessoas} = props;    
    const {first, last} = pessoas.name; 
    /* {`${first} ${last}`}  = string template pra concatenar as constantes first e last*/
    return (
        <View style={styles.linha} >
            <Text style={styles.nomes}>{`${PrimeiraLetraMaiuscula(first)} ${PrimeiraLetraMaiuscula(last)}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default ItensListaPessoas;
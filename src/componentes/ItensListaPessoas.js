import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {PrimeiraLetraMaiuscula} from '../utils';

const ItensListaPessoas = props => {
    const {pessoa} = props;    
    const {first, last} = pessoa.name; 
    /* {`${first} ${last}`}  = string template pra concatenar as constantes first e last*/
    return (
        <View style={styles.linha} >
            <Image style={styles.avatar} source={{uri: pessoa.picture.thumbnail}} />
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
        paddingLeft: 15,    
        flex: 7,  

    },
    avatar:{
        aspectRatio: 1,
        marginLeft: 15,
        borderRadius: 50,
        flex: 1,
    }

});

export default ItensListaPessoas;
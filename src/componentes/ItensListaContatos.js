import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PrimeiraLetraMaiuscula} from '../utils';

/*
    Importado por: ListaContatos;
*/

const ItensListaContatos = props => {
    const {pessoa, navegarTelaContatoDetalhes} = props;    
    const {first, last} = pessoa.name; 
    /* {`${first} ${last}`}  = string template pra concatenar as constantes first e last*/
    return (
        <TouchableOpacity onPress={() =>{ navegarTelaContatoDetalhes({ pessoa }); }} >
            <View style={styles.linha} >
                <Image style={styles.avatar} source={{uri: pessoa.picture.thumbnail}} />
                <Text style={styles.nomes}>{`${PrimeiraLetraMaiuscula(first)} ${PrimeiraLetraMaiuscula(last)}`}</Text>
            </View>
        </TouchableOpacity>
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

export default ItensListaContatos;
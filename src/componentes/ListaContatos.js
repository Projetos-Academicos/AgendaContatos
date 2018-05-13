import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import ItensListaContatos from './ItensListaContatos';

/*
    Importado por: TelaListaContatos;
*/

const ListaContatos = props => {           
    const {pessoas, onPressItemLista} = props;
    const itens = pessoas.map((pessoa, index) =>{
        return <ItensListaContatos key={index} pessoa = {pessoa} navegarTelaContatoDetalhes = {onPressItemLista} />
    });

    return (
        <ScrollView style={styles.container}>
            {itens}
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dcdcdc",
    }   
});

export default ListaContatos;

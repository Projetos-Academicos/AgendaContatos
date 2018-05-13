import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import ItensListaContatos from './ItensListaContatos';

/*
    Importado por: TelaListaContatos;
*/

const ListaContatos = props => {           
    const {pessoas, onPressItemLista} = props;     
    return (
     <FlatList style={styles.container} data={pessoas} 
        renderItem={({item}) => {
            return <ItensListaContatos pessoa = {item} navegarTelaContatoDetalhes = {onPressItemLista} />
         }} 
         keyExtractor={item => item.cell}/>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dcdcdc",
    }   
});

export default ListaContatos;
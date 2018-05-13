import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItensListaPessoas from './ItensListaPessoas';

const ListaPessoas = props => {           
    const {pessoas} = props;
    const itens = pessoas.map((pessoa, index) =>{
        return <ItensListaPessoas key={index} pessoa = {pessoa} />
    });

    return (
        <View style={styles.container}>
            {itens}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dcdcdc",
    }   
});

export default ListaPessoas;

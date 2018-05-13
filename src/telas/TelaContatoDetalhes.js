import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import LinhaContatoDetalhes from '../componentes/LinhaContatoDetalhes';

/*
    Importado por: App;
*/

export default class TelaContatoDetalhes extends React.Component {

    render() {
        const { pessoa } = this.props.navigation.state.params;
        return  (
            <ScrollView style={styles.container}>
                <Image style={styles.avatar} source={{uri: pessoa.picture.large }}/>
                <View style={styles.tabela}>
                    <LinhaContatoDetalhes titulo = "Email:" conteudo = {pessoa.email} />      
                    <LinhaContatoDetalhes titulo = "Tel.:" conteudo = {pessoa.phone} /> 
                    <LinhaContatoDetalhes titulo = "Cel.:" conteudo = {pessoa.cell} /> 
                    <LinhaContatoDetalhes titulo = "Cidade:" conteudo = {pessoa.location.city} />   
                    <LinhaContatoDetalhes titulo = "Estado:" conteudo = {pessoa.location.state} />            
                    <LinhaContatoDetalhes titulo = "Nacionalidade:" conteudo = {pessoa.nat} /> 
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 15,
    },
    avatar: {
        aspectRatio: 1,        
        borderRadius: 5,
    },
    tabela: {
        marginTop: 15, 
        marginBottom: 15,       
        backgroundColor: "#dcdcdc",
        elevation: 1,        
    },   
});
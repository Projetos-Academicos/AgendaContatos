import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

/*
    Importado por: TelaContatoDetalhes;
*/

const LinhaContatoDetalhes = props => {
    const {titulo = "", conteudo = "-" } = props;

    return (
        <View style={styles.linha}>
            <Text style={[
                styles.celula, 
                styles.celulaTitulo, 
                titulo.length > 8 ? styles.tituloLongo : null
                ]}>   {titulo}
            </Text>
            <Text style={[
                styles.celula,
                styles.celulaConteudo,
                conteudo.length > 23 ? styles.conteudoLongo : null,
                conteudo.length > 27 ? styles.conteudoMuitoLongo : null
                ]}>   {conteudo}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    linha: {
        flexDirection: "row",
        padding: 3,
        borderWidth: 1,
        borderColor: "#bbb",
    },    
    celula: {
        fontSize: 18,
    },
    celulaTitulo: {       
        fontWeight: "bold",
        flex: 2,
    },
    celulaConteudo: {
        flex: 5,
    },
    tituloLongo: {
        fontSize: 12,
    },
    conteudoLongo: {
        fontSize: 15,
    },
    conteudoMuitoLongo: {
        fontSize: 13,
    },
});

export default LinhaContatoDetalhes;
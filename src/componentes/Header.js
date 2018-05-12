import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={style.view}>
        <Text style={style.titulo}>{props.titulo}</Text>
    </View>
);


/* StyleSheet*/
const style = StyleSheet.create({
    view: {
        marginTop: 25,
        backgroundColor: '#dcdcdc',   
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 50
    }
});



export default Header;
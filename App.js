import { createStackNavigator } from 'react-navigation';
import TelaListaContatos from './src/telas/TelaListaContatos';
import TelaContatoDetalhes from './src/telas/TelaContatoDetalhes';

export default createStackNavigator ({
  "Main": {
    screen: TelaListaContatos    
  },
  "DetalhesContato":{
    screen: TelaContatoDetalhes
  }
},{
  navigationOptions: {
    title: "Contatos",
    headerStyle: {
      backgroundColor: "#414146",
      borderBottomWidth: 1,     
    },
    headerTitleStyle:{
      fontSize: 30,
      color: "#fff",
      alignSelf: "center",
    },
  }
});
//export default TelaListaContatos;
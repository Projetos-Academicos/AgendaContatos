import { createStackNavigator } from 'react-navigation';
import TelaListaContatos from './src/telas/TelaListaContatos';
import TelaContatoDetalhes from './src/telas/TelaContatoDetalhes';
import {PrimeiraLetraMaiuscula} from './src/utils'

export default createStackNavigator ({
  "Main": {
    screen: TelaListaContatos,   
    navigationOptions: {
      title: "Contatos",
    } 
  },
  "DetalhesContato":{
    screen: TelaContatoDetalhes,
    navigationOptions: ({navigation}) => {
      const nomeContato =  PrimeiraLetraMaiuscula (navigation.state.params.pessoa.name.first);
       return ({
        title: nomeContato,
        headerTitleStyle:{
          fontSize: 30,
          color: "#fff",         
        },
      });
    }
  }
},{
  navigationOptions: {   
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#414146",
      borderBottomWidth: 1,     
    },
    headerTitleStyle:{
      fontSize: 30,
      color: "#fff",
      textAlign: "center",
      flexGrow: 1,
    },
  }
});
//export default TelaListaContatos;
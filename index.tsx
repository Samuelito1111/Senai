import{View, Text} from 'react-native';
import {styles} from './styles';
import Component from './componente';


export default function App(){
  return(
    <View style={styles.central}>
      <Text style={styles.titulo}>Sistema Conversor de Moedas</Text>
      <Component/>
    </View>
  );
}
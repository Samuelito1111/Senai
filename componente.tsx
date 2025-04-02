import {Text, View, Button, TextInput} from 'react-native';
import {styles} from './styles';
import React, { useState } from 'react';

export default function Component(){
    const [moeda, setMoeda] = useState('')

    function converter(valor){
        if (valor == ''){
            alert("campo vazio")
        } else{
            alert(`Valor dolar: $${(valor/5.60).toFixed(2)}
            \nValor euro: $${(valor/6.18).toFixed(2)}`)
        }
    }

    return(
        <View style={styles.caixa}>
            <Text style={styles.ctitle}>Valor:</Text>
            <TextInput style={styles.cinput}
                keyboardType='numeric'
                value={moeda}
                onChangeText={setMoeda}
            />
            <Button
            title='Converter'
            onPress={()=>converter(moeda)}
            />
        </View>
    )
}
import { useState } from "react"
import { View , TouchableOpacity , StyleSheet, Text } from "react-native"

const CounterHook = () => {

    const [ value , setValue ] = useState<number>(0);

    const onPressCallback = (pom:'plus'|'minus') => {
        if(pom == 'minus'){setValue(v => v-1)};
        if(pom == 'plus'){setValue(v => v+1)}
    }

    const isEnabled = (condition:boolean) => (condition) ? enabled : disabled ;

    const RenderCounter = () =>
        <View style={render}>
            <TouchableOpacity style={[button,isEnabled(value !== 0)]} onPress={() => onPressCallback('minus')} disabled={value == 0}><Text>-1</Text></TouchableOpacity>
            <Text style={{fontSize:20}}>{value+1}</Text>
            <TouchableOpacity style={[button,isEnabled(value !== 9)]} onPress={() => onPressCallback('plus')} disabled={value == 9}><Text>+1</Text></TouchableOpacity>
        </View>

    return ({ RenderCounter , styleValue:value })
    
}

const { render , button , enabled , disabled } = StyleSheet.create({
    render:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    button:{
        maxWidth:60,maxHeight:60,
        minWidth:60,minHeight:60,
        borderRadius:100,
        backgroundColor:'grey',
        flex:1,justifyContent:'center',alignItems:'center'
    },
    enabled:{},disabled:{opacity:0.2}
})

export default CounterHook ;
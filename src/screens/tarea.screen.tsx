import { StyleSheet , SafeAreaView , View , Text } from "react-native";

const TareaScreen = () => {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.naranja}></View>
            <View style={styles.purpura}></View>
            <View style={styles.verde}></View>
        </SafeAreaView>
    )

}

const caja = {width:100,height:100,margin:3,borderWidth:3,borderColor:'white'}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    naranja:{
        ...caja,
        backgroundColor:'orange'
    },
    purpura:{
        ...caja,
        backgroundColor:'purple'
    },
    verde:{
        ...caja,
        backgroundColor:'green'
    },
})

export default TareaScreen
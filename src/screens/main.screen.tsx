import { StyleSheet, View , Text } from "react-native"

const MainScreen = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hola mundo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{fontSize:30,fontWeight:'500'}
})

export default MainScreen
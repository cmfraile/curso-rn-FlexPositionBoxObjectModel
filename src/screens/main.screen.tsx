import { StyleSheet , Text, SafeAreaView, useWindowDimensions } from "react-native"

const MainScreen = () => {

    const { width , height } = useWindowDimensions()

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>W : {width} , H : {height}</Text>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{fontSize:30,fontWeight:'500'}
})

export default MainScreen
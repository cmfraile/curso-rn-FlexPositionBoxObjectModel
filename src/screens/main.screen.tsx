import { StyleSheet , Text, SafeAreaView, useWindowDimensions, View } from "react-native"

const MainScreen = () => {

    const { width , height } = useWindowDimensions()

    return(
        <SafeAreaView style={styles.container}>
            {/*<Text style={styles.text}>W : {width} , H : {height}</Text>*/}
            <View style={[styles.viewFirst,styles.naranja]}></View>
            <View style={[styles.viewFirst,styles.purpura]}></View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    viewFirst:{width:100,height:100,borderWidth:5,borderColor:'white'},
    naranja:{backgroundColor:'orange',left:50,position:'absolute'},purpura:{backgroundColor:'purple',position:'absolute',left:0},
    text:{fontSize:30,fontWeight:'500'}
})

export default MainScreen
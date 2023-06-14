import { StyleSheet , Text, SafeAreaView, useWindowDimensions, View } from "react-native";

const MainScreen = () => {

    //const { width , height } = useWindowDimensions()

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
    viewFirst:{width:100,height:100,borderWidth:5,borderColor:'white',borderRadius:10,margin:10},
    naranja:{
        backgroundColor:'orange',
        bottom:0,right:0,
        position:'absolute'},
    purpura:{
        backgroundColor:'purple',
        top:0,left:0,
        position:'absolute'},
    text:{fontSize:30,fontWeight:'500'}
})

export default MainScreen
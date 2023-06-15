import { StyleSheet , Text, SafeAreaView, useWindowDimensions, View } from "react-native";

const FlexboxScreen = () => {

    //const { width , height } = useWindowDimensions()

    return(
        <SafeAreaView style={styles.container}>
            {/*<Text style={styles.text}>W : {width} , H : {height}</Text>*/}
            <View style={[styles.viewFirst,styles.naranja]}></View>
            <View style={[styles.viewFirst,styles.purpura]}></View>
            <View style={[styles.viewFirst,styles.verde]}></View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    viewFirst:{
        minHeight:100,minWidth:100,
        maxHeight:100,maxWidth:100,
        borderRadius:10,borderWidth:3,padding:10},
    naranja:{
        flex:1,
        alignSelf:'flex-end',
        backgroundColor:'orange'
    },
    purpura:{
        flex:1,
        backgroundColor:'purple'
    },
    verde:{
        flex:1,
        backgroundColor:'green'
    },
    text:{fontSize:30,fontWeight:'500'}
})

export default FlexboxScreen
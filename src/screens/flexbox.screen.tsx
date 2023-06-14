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
    container:{flex:1},
    viewFirst:{width:'100%',borderRadius:10,borderWidth:3,padding:10},
    naranja:{
        flex:1,
        backgroundColor:'orange'
    },
    purpura:{
        flex:5,
        backgroundColor:'purple'
    },
    verde:{
        flex:4,
        backgroundColor:'green'
    },
    text:{fontSize:30,fontWeight:'500'}
})

export default FlexboxScreen
import { StyleSheet , Text, SafeAreaView, useWindowDimensions, View } from "react-native";

const FlexboxScreen = () => {

    //const { width , height } = useWindowDimensions()

    const CraftAndRender = () =>
        <>
            <View style={[styles.viewFirst,styles.naranja]}></View>
            <View style={[styles.viewFirst,styles.purpura]}></View>
            <View style={[styles.viewFirst,styles.verde]}></View>
            <View style={[styles.viewFirst,styles.naranja]}></View>
            <View style={[styles.viewFirst,styles.purpura]}></View>
            <View style={[styles.viewFirst,styles.verde]}></View>
        </>


    return(
        <SafeAreaView style={styles.container}>
            {/*<Text style={styles.text}>W : {width} , H : {height}</Text>*/}
            <CraftAndRender/>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row'
    },
    viewFirst:{
        minHeight:100,minWidth:'50%',
        maxHeight:100,maxWidth:100,
        borderRadius:10,borderWidth:3,padding:10},
    naranja:{
        flex:1,
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
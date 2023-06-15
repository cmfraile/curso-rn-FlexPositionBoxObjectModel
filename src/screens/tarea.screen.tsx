import { StyleSheet , SafeAreaView , View, ViewStyle } from "react-native";
import CounterHook from "../components/counter.component";

const TareaScreen = () => {

    const { RenderCounter , styleValue } = CounterHook();

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={[{flex:6,backgroundColor:'lightgrey'},styleSheetCollection[styleValue].container]}>
                <View style={styleSheetCollection[styleValue].naranja}></View>
                <View style={styleSheetCollection[styleValue].purpura}></View>
                <View style={styleSheetCollection[styleValue].verde}></View>
            </View>
            <RenderCounter/>
        </SafeAreaView>
    )

}

const caja = {margin:3,borderWidth:3,borderColor:'white'};
const styleSheetCollection:{[key:number]:any} = {
    0:StyleSheet.create({
        container:{},
        naranja:{...caja,backgroundColor:'orange',
            maxWidth:50,
            flex:1,
        },
        purpura:{...caja,backgroundColor:'purple',
            maxWidth:50,
            flex:5,
        },
        verde:{...caja,backgroundColor:'green',
            maxWidth:50,
            flex:1,
        }
    }),
    1:StyleSheet.create({
        container:{justifyContent:'center'},
        naranja:{...caja,backgroundColor:'orange',
            maxWidth:50,
            height:50
        },
        purpura:{...caja,backgroundColor:'purple',
            maxWidth:50,
            height:50
        },
        verde:{...caja,backgroundColor:'green',
            minWidth:'100%',
            height:50
        },
    }),
    2:StyleSheet.create({
        container:{justifyContent:'center'},
        naranja:{...caja,backgroundColor:'orange',
            width:80,height:80,
            alignSelf:'flex-end'
        },
        purpura:{...caja,backgroundColor:'purple',
            width:80,height:80
        },
        verde:{...caja,backgroundColor:'green',
            width:80,height:80,
            alignSelf:'center'
        },
    }),
    3:StyleSheet.create({
        container:{alignItems:'center',justifyContent:'space-between'},
            naranja:{...caja,backgroundColor:'orange',
            width:80,height:80,
            alignSelf:'flex-end'
        },
            purpura:{...caja,backgroundColor:'purple',
            width:80,height:80,
        },
            verde:{...caja,backgroundColor:'green',
            width:80,height:80,
            alignSelf:'flex-start'
        },
    }),
    4:StyleSheet.create({
        container:{flexDirection:"row",justifyContent:"space-between"},
        naranja:{...caja,backgroundColor:'orange',
            minHeight:'100%',width:80
        },
        purpura:{...caja,backgroundColor:'purple',
            minHeight:'100%',width:80
        },
        verde:{...caja,backgroundColor:'green',
            minHeight:'100%',width:80
        },
    }),
    5:StyleSheet.create({
        container:{},
        naranja:{...caja,backgroundColor:'orange',
        flex:1
        },
        purpura:{...caja,backgroundColor:'purple',
        flex:1
        },
        verde:{...caja,backgroundColor:'green',
        flex:2
        },
    }),
    6:StyleSheet.create({
        container:{justifyContent:'center',alignItems:'center'},
        naranja:{...caja,backgroundColor:'orange',
        width:80,height:80
        },
        purpura:{...caja,backgroundColor:'purple',
        width:80,height:80
        },
        verde:{...caja,backgroundColor:'green',
        width:80,height:80
        },
    }),
    7:StyleSheet.create({
        container:{justifyContent:'center',alignItems:'center'},
        naranja:{...caja,backgroundColor:'orange',
        width:80,height:80
        },
        purpura:{...caja,backgroundColor:'purple',
        width:80,height:80,
        left:80
        },
        verde:{...caja,backgroundColor:'green',
        width:80,height:80,
        },
    }),
    8:StyleSheet.create({
        container:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
        naranja:{...caja,backgroundColor:'orange',
        width:80,height:80,
        top:85,left:85
        },
        purpura:{...caja,backgroundColor:'purple',
        width:80,height:80
        },
        verde:{...caja,backgroundColor:'green',
        width:80,height:80,
        },
    }),
    9:StyleSheet.create({
        container:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
        naranja:{...caja,backgroundColor:'orange',
        width:80,height:80,
        },
        purpura:{...caja,backgroundColor:'purple',
        width:80,height:80,
        top:40
        },
        verde:{...caja,backgroundColor:'green',
        width:80,height:80,
        },
    })
}

export default TareaScreen
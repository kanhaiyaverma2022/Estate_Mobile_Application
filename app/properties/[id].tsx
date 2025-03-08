import {Text, View} from "react-native";
import { useLocalSearchParams } from "expo-router";


const Properties = ()=>
{
    const {id} = useLocalSearchParams();
    return (
        <View><Text>Properties {id}</Text></View>
    )
}

export default  Properties


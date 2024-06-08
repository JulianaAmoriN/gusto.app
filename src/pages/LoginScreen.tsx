import React from "react";
import { View, Text, TextInput } from "react-native";
import CustomHeader from "../components/CustomHeader";

export default class LoginPage extends React.Component {
 render() {
    return(
        <View>
            <CustomHeader title="" />
            <TextInput/>
        </View>
    )
 }
}
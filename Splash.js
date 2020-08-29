import React from "react";
import { View, Text } from 'react-native';

export default () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'orange' }}>
            <Text style={{
                color: 'white',
                fontSize: 40,
                fontWeight: 'bold'
            }}>Splash Screen here !</Text>
        </View>
    )
}
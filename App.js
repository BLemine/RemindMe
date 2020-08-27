import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, SafeAreaView, TextInput, ScrollView
} from 'react-native'
import { Avatar, Badge, Icon, withBadge, Button, CheckBox } from 'react-native-elements'
//import { TabNavigator } from 'react-navigation';

export default class App extends Component {
    render() {
        return (<ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{ marginTop: 30, padding: 20 }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Icon

                            name='menu'
                            type='ionicons'
                            color='white'
                            size={20}

                        />

                        <View style={{
                            flex: 1, flexDirection: 'row', marginLeft: 140,
                            justifyContent: 'space-between'
                        }}>
                            <Icon

                                name='notifications-none'
                                type='fontawesome'
                                color='white'
                                size={20}

                            />
                            <Icon

                                name='person-outline'
                                type='fontawesome'
                                color='white'
                                size={20}

                            />
                        </View>

                    </View>
                    <Text style={{ color: '#e6e6e6', fontSize: 20 }}>Hello,</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>You are welcome!</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TextInput placeholder='Search.....' style={styles.input} />
                </View>
                <View style={styles.container2}>
                    <Text style={{ fontWeight: 'bold' }}>Today</Text>
                    <View style={{
                        backgroundColor: '#ff704d', width: 17, height: 3,
                        position: 'absolute', top: 43,

                    }} />

                    <View style={styles.icon}>
                        <Icon

                            name='add'
                            type='ionicons'
                            color='white'
                            size={40}

                        />
                    </View>
                </View>

            </SafeAreaView >
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: ' rgb(92, 133, 214)',
    },
    container2: {
        marginTop: '10%',
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
        height: 349,
        padding: 20
    },
    input: {
        borderColor: 'none',
        padding: 15,
        width: '80%',
        color: 'white',
        height: 40,
        borderWidth: 0,
        borderRadius: 20,
        backgroundColor: ' rgb(51, 102, 204)',
        placeholderTextColor: 'white'

    },
    icon: {

        position: 'absolute',
        width: 72, height: 72,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 15,
        borderRadius: 12,
        top: 230, left: 160,
        backgroundColor: '#ff704d',
        shadowOffset: { width: -1, height: 1, },
        justifyContent: 'center'
    }

})





//import '../screens/next.js';
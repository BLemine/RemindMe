import React from "react";
import { View, Text, TextInput, Modal, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'

export default (props) => {
    const [colors, setColors] = React.useState([
        { value: "red", checked: false },
        { value: "yellow", checked: false },
        { value: "grey", checked: false },
        { value: "green", checked: false }
    ])
    const setChecked = (colorValue) => {
        const aux = colors;
        for (let i in colors) {
            if (colors[i].value === colorValue) {
                aux[i].checked = true
            } else {
                aux[i].checked = false
            }
        }
        setColors(aux)
    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.showModal}
                onRequestClose={() => {
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Keeper here!</Text>
                        <TextInput placeholder="Title : " style={{ width: 180 }} value={props.newNote.title} onChangeText={props.onChangeNoteTitle}></TextInput>
                        <TextInput style={{ width: 180 }} placeholder="Note :" multiline={true}
                            value={props.newNote.text} onChangeText={props.onChangeNoteText}>
                        </TextInput>
                        <View style={{
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                        }}>
                            {colors.map((color, index) => {
                                return <TouchableOpacity key={index} style={{ width: 40, height: 40, backgroundColor: color.value, borderRadius: 100, marginRight: 3 }} onPress={() => {
                                    setChecked(color.value)
                                    props.onChangePriority(color.value)
                                }}>
                                    {color.checked &&
                                        <Icon
                                            style={{ marginTop: 10 }}
                                            name='check'
                                            type='Entypo'
                                            color={color.value==="yellow"?'black':"white"}
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            })}
                        </View>
                        <View style={{
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                        }}>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3", marginTop: 20 }}
                                onPress={props.setModalVisible}
                            >
                                <Text style={styles.textStyle}>Finish</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "white", marginTop: 20 }}
                                onPress={() => setVisibility(false)}
                            >
                                <Text style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: 250,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        width: 200
    }
});
import React from "react";
import { View, Text, TextInput, Modal, StyleSheet, TouchableHighlight } from "react-native";

export default (props) => {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.showModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Keeper here!</Text>
                        <TextInput placeholder="title" style={{ width: 150 }} value={props.newNote.title} onChangeText={props.onChangeNoteTitle}></TextInput>
                        <TextInput style={{ width: 150, padding: 5 }} multiline={true}
                            numberOfLines={4} value={props.newNote.text} onChangeText={props.onChangeNoteText}></TextInput>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={props.setModalVisible}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableHighlight>
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
        width: 200,
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
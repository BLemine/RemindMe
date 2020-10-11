import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View, SafeAreaView, TextInput, ScrollView
} from 'react-native'
import { Avatar, Badge, Icon, withBadge, Button, CheckBox } from 'react-native-elements'
import NoteModal from "./NoteModal";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showModal: false,
      notes: [
        {
          title: "Reminder 1",
          text: "Don't forget to change your mask ;) ",
          priority: "yellow"
        },
        {
          title: "Reminder 2",
          text: "Be sure to sleep early today ",
          priority: "yellow"
        }
      ],
      newNote: {
        title: "", text: "", priority: ""
      },
      priority: "yellow"
    }
  }
  addNote = async (note) => {
    try {
      if (await AsyncStorage.getItem('notes') !== null) {
        let notes = await AsyncStorage.getItem('notes');
        notes = JSON.parse(notes);
        notes.push(note);
        await AsyncStorage.setItem('notes', JSON.stringify(notes))
        this.getNotes();
      } else {
        let notes = []
        notes.push(note)
        await AsyncStorage.setItem('notes', JSON.stringify(notes))
        this.getNotes();
      }
    } catch (e) {
      // saving error
    }
  }
  cleanNotes = async () => {
    await AsyncStorage.removeItem('notes');
    //this.getNotes();
    this.setState({notes:[
      {
        title: "Reminder 1",
        text: "Don't forget to change your mask ;) ",
        priority: "yellow"
      },
      {
        title: "Reminder 2",
        text: "Be sure to sleep early today ",
        priority: "yellow"
      }
    ]})
  }
  getNotes = async () => {
    if (await AsyncStorage.getItem('notes') !== null) {
      const storedNotes = await AsyncStorage.getItem('notes')
      this.setState({ notes: JSON.parse(storedNotes).reverse() })
    } else {
      await AsyncStorage.setItem("notes", JSON.stringify(this.state.notes))
    }
  }
  componentDidMount() {
    SplashScreen.hide();
    this.getNotes();
  }
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={{ marginTop: 30, padding: 20 }}>
            <NoteModal showModal={this.state.showModal} setModalVisible={() => {
              this.setState({ showModal: false });
              //let Notes_aux = this.state.notes;
              //Notes_aux.splice(0, 0, this.state.newNote);
              //this.setState({ notes: Notes_aux })
              this.addNote(this.state.newNote)
            }}
              newNote={this.state.newNote}
              onChangeNoteTitle={(text) => this.setState({ newNote: { ...this.state.newNote, title: text } })}
              onChangeNoteText={(text) => this.setState({ newNote: { ...this.state.newNote, text: text } })}

              onChangePriority={(text) => this.setState({ newNote: { ...this.state.newNote, priority: text } })}
              priority={this.state.priority}
            />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Icon
                name='language'
                type='Entypo'
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
                  onPress={() => this.cleanNotes()}
                  name='delete-forever'
                  type='MaterialIcons'
                  color='white'
                  size={20}
                />
              </View>
            </View>
            <Text style={{ color: '#e6e6e6', fontSize: 20 }}>Hello,</Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Welcome to your Notes Keeper</Text>
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
            <ScrollView>
              {this.state.notes.map((note, index) => {
                return (
                  <View key={index} style={{
                    shadowColor: "rgba(0,0,0,1)",
                    shadowOffset: {
                      width: 3,
                      height: 3
                    },
                    elevation: 5,
                    shadowOpacity: 0.66,
                    shadowRadius: 0,
                    marginTop: 10, width: 250, height: 150, borderStyle: "solid", borderWidth: 1, borderRadius: 12
                  }}>
                    <Text style={{ padding: 3, backgroundColor: note.priority, borderRadius: 12 }}>{note.title}</Text>
                    <Text style={{ padding: 3 }}>{note.text} </Text>
                  </View>
                )
              })
              }

            </ScrollView>
            <View style={styles.icon}>
              <Icon
                onPress={() => {
                  this.setState({ showModal: true })
                }}
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
    backgroundColor: 'orange',
  },
  container2: {
    marginTop: '10%',
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    height: Dimensions.get('window').height - 250,
    padding: 20
  },
  input: {
    //borderColor: 'none',
    padding: 4,
    width: '80%',
    color: 'white',
    height: 40,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#916c06',
    //placeholderTextColor: 'white'

  },
  icon: {

    position: 'absolute',
    width: 72, height: 72,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    borderRadius: 12,
    top: 230, right: 50,
    backgroundColor: '#ff704d',
    shadowOffset: { width: -1, height: 1, },
    justifyContent: 'center'
  }

})





//import '../screens/next.js';
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import parseTime from "./ParseTime";

const SERVER_URL = "http://10.0.2.2:3000/notes/";

const NoteComponent = ({ navigation, title, description, date, id }) => {
  const deleteNote = () => {
    fetch(SERVER_URL + `delete/${id}`, {
      method: "DELETE",
    }).catch((err) => console.log(err));
  };

  return (
    <View style={styles.noteLayout}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit", { id: id });
        }}
      >
        {/*Note Title*/}
        <Text style={styles.noteTitle}>{title}</Text>
        {/*Note Date*/}
        <View style={styles.noteDate}>
          <Text>{date.toLocaleDateString()}</Text>
          <Text>{parseTime(date)}</Text>
        </View>
        {/*Note Description*/}
        <Text style={styles.noteDescription}>{description}</Text>
        {/*Trash Icon*/}
        <TouchableOpacity
          style={styles.trashIcon}
          onPress={() => {
            deleteNote();
          }}
        >
          <Icon name="trash-alt" size={20} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  noteLayout: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
  noteTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  noteDescription: {
    fontSize: 20,
    paddingTop: 5,
    paddingRight: 30,
  },
  noteDate: {
    position: "absolute",
    right: 5,
  },
  trashIcon: {
    alignSelf: "flex-end",
  },
});

export default NoteComponent;

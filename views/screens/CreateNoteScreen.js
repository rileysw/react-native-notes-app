import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NoteWriteComponent from "../components/NoteWriteComponent";

const SERVER_URL = "http://10.0.2.2:3000/notes/";

const CreateNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showMode, setShowMode] = useState(false);
  const [mode, setMode] = useState("date");

  // POST request to add new note
  const addNote = () => {
    fetch(SERVER_URL + "add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        date: date,
      }),
    }).catch((err) => console.log(err));
  };

  return (
    <View style={styles.createLayout}>
      {/*Writing Area*/}
      <NoteWriteComponent
        initialTitle={title}
        initialDescription={description}
        initialDate={date}
        showMode={showMode}
        mode={mode}
        setTitle={setTitle}
        setDescription={setDescription}
        setDate={setDate}
        setMode={setMode}
        setShowMode={setShowMode}
      />
      {/*Save Button*/}
      <TouchableOpacity
        onPress={() => {
          addNote();
          navigation.navigate("Home");
        }}
        style={[styles.writeContainer, styles.saveButton]}
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  createLayout: {
    marginTop: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    display: "flex",
  },
  writeContainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    fontSize: 20,
  },
  saveButton: {
    borderColor: "#208ee3",
    backgroundColor: "#208ee3",
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CreateNoteScreen;

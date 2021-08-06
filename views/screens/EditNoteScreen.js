import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NoteWriteComponent from "../components/NoteWriteComponent";

const SERVER_URL = "http://10.0.2.2:3000/notes/";

const EditNoteScreen = ({ navigation }) => {
  const id = navigation.state.params.id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showMode, setShowMode] = useState(false);
  const [mode, setMode] = useState("date");
  const [editState, setEditState] = useState(false);

  // GET request to get note by ID
  const getNoteById = () => {
    fetch(SERVER_URL + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((jsonData) => {
        setTitle(jsonData.title);
        setDescription(jsonData.description);
        setDate(new Date(jsonData.date));
      })
      .catch((err) => console.log(err));
  };

  // Get saved note only when note is saved to database
  useEffect(() => {
    getNoteById();
  }, [editState]);

  // PUT request to update note
  const updateNote = () => {
    fetch(SERVER_URL + `update/${id}`, {
      method: "PUT",
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
          updateNote();
          setEditState(true);
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

export default EditNoteScreen;

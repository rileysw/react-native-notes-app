import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import NoteComponent from "../components/NoteComponent";

const SERVER_URL = "http://10.0.2.2:3000/notes/";

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  // GET request to get all notes
  const getNotes = () => {
    fetch(SERVER_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((jsonData) => setNotes(jsonData))
      .catch((err) => console.log(err));
  };

  // Get notes after each render to account for changes
  useEffect(() => {
    getNotes();
  });

  return (
    <View style={styles.homeLayout}>
      {/*Title Area*/}
      <View style={styles.homeHeading}>
        <Text style={styles.homeTitle}>Notes</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Create");
          }}
        >
          <Text style={styles.homeAdd}>+Add</Text>
        </TouchableOpacity>
      </View>
      {/*Notes Area*/}
      <FlatList
        keyExtractor={(item) => item._id}
        data={notes}
        renderItem={({ item }) => {
          return (
            <NoteComponent
              navigation={navigation}
              title={item.title}
              description={item.description}
              date={new Date(item.date)}
              id={item._id}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    marginTop: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    display: "flex",
  },
  homeHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeTitle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  homeAdd: {
    fontSize: 40,
    color: "#208ee3",
  },
});

export default HomeScreen;

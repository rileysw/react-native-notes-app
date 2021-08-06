import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";
import parseTime from "./ParseTime";

const NoteWriteComponent = ({
  initialTitle,
  initialDescription,
  initialDate,
  showMode,
  mode,
  setTitle,
  setDescription,
  setDate,
  setShowMode,
  setMode,
}) => {
  return (
    <View>
      {/*Note Title*/}
      <Text style={styles.writeHeading}>Title</Text>
      <TextInput
        style={styles.writeContainer}
        autoCapitalize="none"
        autoCorrect={false}
        value={initialTitle}
        onChangeText={(input) => setTitle(input)}
      />
      {/*Note Description*/}
      <Text style={styles.writeHeading}>Description</Text>
      <TextInput
        style={[styles.writeContainer, styles.descriptionContainer]}
        autoCapitalize="none"
        autoCorrect={false}
        value={initialDescription}
        onChangeText={(input) => setDescription(input)}
      />
      {/*Note Date*/}
      <Text style={styles.writeHeading}>Date</Text>
      <TouchableOpacity
        style={styles.writeContainer}
        onPress={() => setShowMode("true")}
      >
        <Text style={styles.dateText}>
          {initialDate.toLocaleDateString()} {parseTime(initialDate)}
        </Text>
        <Icon name="edit" size={20} style={styles.editIcon} />
      </TouchableOpacity>
      {/*Date Calendar and Clock - renders only when Date container is pressed*/}
      {showMode && (
        <DateTimePicker
          value={initialDate}
          onChange={(event, date) => {
            if (event.type == "dismissed") {
              setShowMode(false);
              setMode("date");
            } else {
              setDate(new Date(date));
              if (mode == "date") {
                setMode("time");
              } else {
                setShowMode(false);
                setMode("date");
              }
            }
          }}
          mode={mode}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  writeHeading: {
    fontSize: 20,
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
  descriptionContainer: {
    height: 150,
    textAlignVertical: "top",
    textAlign: "left",
  },
  dateText: {
    fontSize: 20,
  },
  editIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});

export default NoteWriteComponent;

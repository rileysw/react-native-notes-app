import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./views/screens/HomeScreen";
import CreateNoteScreen from "./views/screens/CreateNoteScreen";
import EditNoteScreen from "./views/screens/EditNoteScreen";

// Screen Navigation Properties
const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "",
    },
  },
  Create: {
    screen: CreateNoteScreen,
    navigationOptions: {
      title: "Create Note",
    },
  },
  Edit: {
    screen: EditNoteScreen,
    navigationOptions: {
      title: "Edit Note",
    },
  },
};

// Create Screen Navigator
const navigator = createStackNavigator(screens, {
  initialRouteName: "Home",
});

export default createAppContainer(navigator);

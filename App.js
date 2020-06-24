import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorPickerScreen from './src/screens/ColorPickerScreen';
import ColorPickerScreenSliders from './src/screens/ColorPickerScreenSliders';
import ColorPickerScreenOptomized from './src/screens/ColorPickerScreenOptomized';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chump: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Picker: ColorPickerScreen,
    Slider: ColorPickerScreenSliders,
    Optomized: ColorPickerScreenOptomized,
    Text: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "APP"
    }
  }
);

export default createAppContainer(navigator);

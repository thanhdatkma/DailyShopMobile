import { IconObject } from "react-native-elements/dist/icons/Icon";
import { StyleProp, TextStyle } from "react-native";

export class HeaderIconModel implements IconObject {
  icon: string;
  text: string;
  color: string;
  style: StyleProp<TextStyle>;
}

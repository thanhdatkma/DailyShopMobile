
import { Dimensions, StyleSheet } from "react-native";
export class CommonHelper {
  getWidthHeight() {
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;
    return {
      fullWidth: width,
      fullHeight: height
    }
  }
  generateStyleHelper(styleObj: any) {
    return StyleSheet.create(styleObj)
  }
  checkIndexIsEvent(index: number) {
    return index % 2 === 0;
  }
  checkTotalEvent(index: number, total: number, col: number) {
    if (index + 1 === total) {
      return total % col === 0;
    }
    return true;
  }
}

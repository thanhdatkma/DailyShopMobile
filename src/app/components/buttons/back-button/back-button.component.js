import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

function BackButtonComponent({navigation}) {
  const [styles, setStyles] = useState(StyleSheet.create({
    backButton: {
      borderRadius: 50,
      width: 30,
      height: 30,
      padding: 3,
      backgroundColor: '#66666773',
      marginHorizontal: 5,
      color: 'lightgrey',
    }
  }));
  return(
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={'arrow-back'} size={25} style={styles.backButton} color={styles.backButton.color}/>
      </TouchableOpacity>
    </View>
  );
}
export default BackButtonComponent;

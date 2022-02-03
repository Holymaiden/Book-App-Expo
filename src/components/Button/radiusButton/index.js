import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const RadiusButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: hp(1),
    paddingHorizontal: wp(0.2),
    marginHorizontal: wp(25),
    marginVertical: hp(1),
    backgroundColor: "#548CFF",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: hp(3),
    textAlign: "center",
  },
});

export default RadiusButton;

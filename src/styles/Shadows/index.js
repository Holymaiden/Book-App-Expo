import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7",
    shadowOffSet: { width: wp(0), height: hp(10) },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Styles;

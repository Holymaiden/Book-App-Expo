import { Text, View, SafeAreaView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Cari() {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", marginHorizontal: wp(5) }}>
        <Text>Ini Cari</Text>
      </View>
    </SafeAreaView>
  );
}

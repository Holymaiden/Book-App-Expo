import { RadiusButton } from "../../components/Button";
import { Text, View, SafeAreaView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", marginHorizontal: wp(5) }}>
        <Text>Open up App.js to start working on your app!</Text>
        <RadiusButton text="Go to Details" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

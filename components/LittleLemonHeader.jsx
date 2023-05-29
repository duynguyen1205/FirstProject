import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    // nếu không thì flex mặc định là 20%
    <View style={{backgroundColor: '#EE9972' }}>
      <Text style={{ padding: 40, fontSize: 30, color: 'black', textAlign: "center" }}>Little Lemon</Text>
    </View>
  );
}

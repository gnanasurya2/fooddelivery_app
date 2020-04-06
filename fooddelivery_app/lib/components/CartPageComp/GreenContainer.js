import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SwitchScreenButton from "./Button";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const GreenContainer = () => {
  const { designStyle, container, textStyle1 } = styles;

  return (
    <View>
      <View style={styles.container}>
        <LinearGradient
          style={designStyle}
          colors={["#4CAF50", "#2E7D32"]}
          start={[0.2, 0.1]}
          end={[0.3, 0.9]}
        >
          <View style={styles.textContainer}>
  <Text style={textStyle1}>Total Amount: {'\u20B9'}121</Text>
            <Text style={textStyle1}>Tax: {'\u20B9'}7</Text>
            <Text style={textStyle1}>Delivery charges: {'\u20B9'}30</Text>
            <Text style={textStyle1}>Gross Amount: {'\u20B9'}158</Text>
          </View>
          <SwitchScreenButton title="Proceed to Payment" />
        </LinearGradient>
      </View>
    </View>
  );
};
export default GreenContainer;

const styles = StyleSheet.create({
  container: {
    height: 0.18 * height,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    borderRadius: 60,
  },
  textContainer: {
    marginTop: "3.0%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
  },
  textStyle1: {
    fontSize: 12,
    color: "white",
    paddingTop: 2
  },
  designStyle: {
    position: "absolute",
    marginTop: 0.0 * height,
    height: 0.2 * height,
    width: 1 * width,
    elevation: 5,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60
  }
});

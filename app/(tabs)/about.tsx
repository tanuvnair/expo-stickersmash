import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
    return (
        <View>
            <Text>This is the about screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
    },
});

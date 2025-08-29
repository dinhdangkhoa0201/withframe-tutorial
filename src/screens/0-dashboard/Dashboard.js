import React from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const items = [
    {
        name: "1 - Login"
    }, {
        name: "2 - Simple Work Out List"
    }, {
        name: "3 - Profile Card",
        children: [
            {name: "Profile Card 1"},
            {name: "Profile Card 2"}
        ]
    }
]

export default function Dashboard() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#ebecf4"}}>
            <View style={styles.container}>
                <Text style={styles.title}>Dashboard 🍌</Text>
                {
                    items.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                // Handle navigation to respective screen
                            }}>
                            <View style={styles.card}>
                                <Text style={styles.cardTitle}>{item.name}</Text>

                                <View style={styles.cardAction}>
                                    <Feather name={"chevron-right"} size={16} color={"#9ca3af"}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginTop: 12,
        marginBottom: 12
    },
    card: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#e3e3e3",
        marginBottom: 8,
        backgroundColor: "#fff",
        borderRadius: 8
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000"
    },
    cardAction: {
        marginLeft: "auto"
    }
})
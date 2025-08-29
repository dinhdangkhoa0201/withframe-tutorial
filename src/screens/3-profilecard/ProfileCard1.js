import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function ProfileCard1() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#f6f6f6"}}>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image
                        style={styles.profileAvatar}
                        source={{uri: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                        alt={"profile picture"}/>
                    <Text style={styles.profileName}>Khoa Cyruss</Text>
                    <Text style={styles.profileEmail}>khoacyruss@example.com</Text>

                    <TouchableOpacity onPress={() => {
                        // handle onPress
                    }}>
                        <View style={styles.profileAction}>
                            <Text style={styles.profileActionText}>
                                Edit Profile
                            </Text>
                            <Feather name={"edit"} color={"#fff"} size={16}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 48,
        flex: 1
    },
    profile: {
        padding: 16,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#e3e3e3"
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 9999
    },
    profileName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: "600",
        color: "#090909"
    },
    profileEmail: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: "400",
        color: "#848484"
    },
    profileAction: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#007bff",
        borderRadius: 12
    },
    profileActionText: {
        marginRight: 6,
        fontSize: 15,
        fontWeight: "600",
        color: "#fff"
    }
})
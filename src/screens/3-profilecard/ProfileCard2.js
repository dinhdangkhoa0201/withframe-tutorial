import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function ProfileCard2() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#f6f6f6"}}>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <View style={styles.profileHeader}>
                        <Image style={styles.profileAvatar}
                               source={{uri: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                               alt={"Profile Picture"}/>

                        <View style={styles.profileBody}>
                            <Text style={styles.profileName}>Khoa Cyruss</Text>
                            <Text style={styles.profileHandle}>@khoacyruss</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => {
                        // handle onPress
                    }}>
                        <View style={styles.profileAction}>
                            <Text style={styles.profileActionText}>Edit Profile</Text>

                            <Feather name={"edit-3"} color={"#fff"} size={16}/>
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
        paddingTop: 12,
        paddingHorizontal: 24,
        paddingBottom: 24,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#e3e3e3",
        backgroundColor: "#fff",
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    profileBody: {},
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 9999,
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 12
    },
    profileName: {
        fontSize: 17,
        fontWeight: "600",
        color: "#3d3d3d"
    },
    profileHandle: {
        fontSize: 15,
        color: "#989898",
        marginTop: 4
    },
    profileAction: {
        marginTop: 16,
        backgroundColor: "#007bff",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: "600",
        color: "#fff"
    }
})
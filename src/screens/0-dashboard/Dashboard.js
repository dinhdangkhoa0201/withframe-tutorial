import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {DASHBOARD_DATA} from "../../../dashboard";

export default function Dashboard({navigation}) {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#ebecf4"}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Dashboard 👽</Text>
                </View>

                {
                    DASHBOARD_DATA.map(({name, items}, index) => (
                        <View key={name} style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionHeaderText}>{name}</Text>
                            </View>

                            <View style={styles.sectionBody}>
                                {
                                    items.map(({id, label, icon, navigateTo}) => (
                                        <View key={id}
                                              style={[
                                                  styles.rowWrapper,
                                                  index === 0 && ({borderTopWidth: 0})
                                              ]}>
                                            <TouchableOpacity onPress={() => {
                                                // handle onPress
                                                navigation.navigate(navigateTo);
                                            }}>
                                                <View style={styles.row}>
                                                    <Feather name={icon} color={"#616161"} size={22}
                                                             style={{marginRight: 12}}/>

                                                    <Text style={styles.rowLabel}>{label}</Text>

                                                    <View style={styles.rowSpace}></View>

                                                    <Feather name={"chevron-right"} color={"#ababab"} size={22}/>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1d1d1d",
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#a7a7a7",
        textTransform: "uppercase",
        letterSpacing: 1.2
    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: "#e3e3e3",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 2
    },
    row: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingRight: 24
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: "500",
        color: "#000"
    },
    rowSpace: {
        flex: 1
    }
})
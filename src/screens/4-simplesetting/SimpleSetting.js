import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import ProfileCard1 from "../3-profilecard/ProfileCard1";

const SECTION = [
    {
        header: "Preferences",
        items: [
            {
                id: "language",
                icon: "globe",
                label: "Language",
                type: "select"
            }, {
                id: "darkMode",
                icon: "moon",
                label: "Dark Mode",
                type: "toggle"
            }, {
                id: "wifi",
                icon: "wifi",
                label: "Use Wi-Fi",
                type: "toggle"
            }
        ]
    }, {
        header: "Help",
        items: [
            {
                id: "bug",
                icon: "flag",
                label: "Report a Bug",
                type: "link"
            }, {
                id: "contact",
                icon: "mail",
                label: "Contact Us",
                type: "link"
            }
        ]
    }, {
        header: "Content",
        items: [
            {
                id: "save",
                icon: "save",
                label: "Saved",
                type: "link"
            }, {
                id: "download",
                icon: "download",
                label: "Downloads",
                type: "link"
            }
        ]
    }
]

export default function SimpleSetting() {
    const [form, setForm] = useState({
        language: "English",
        darkMode: true,
        wifi: false
    })

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#f6f6f6"}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Settings ⚙</Text>
                    <Text style={styles.subtitle}>Update your preferences, here</Text>
                </View>

                <ProfileCard1/>

                {
                    SECTION.map(({header, items}, key) => (
                        <View key={header}
                              style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionHeaderText}>{header}</Text>
                            </View>

                            <View style={styles.sectionBody}>
                                {
                                    items.map(({id, icon, label, type}, index) => (
                                        <View key={id}
                                              style={[
                                                  styles.rowWrapper,
                                                  index === 0 && {borderTopWidth: 0},
                                              ]}>
                                            <TouchableOpacity onPress={() => {
                                                // handle onPress
                                            }}>
                                                <View style={styles.row}>
                                                    <Feather name={icon} color={"#616161"} size={22} style={{
                                                        marginRight: 12
                                                    }}/>
                                                    <Text style={styles.rowLabel}>{label}</Text>

                                                    <View style={styles.rowSpace}></View>

                                                    {
                                                        type === "select" && (
                                                            <Text style={styles.rowValue}>{form[id]}</Text>
                                                        )
                                                    }

                                                    {
                                                        "toggle" === type && (
                                                            <Switch value={form[id]}
                                                                    onValueChange={(value) => setForm({...form, [id]: value})}/>
                                                        )
                                                    }

                                                    {
                                                        ('select', 'link').includes(type) && (
                                                            <Feather name={"chevron-right"} color={"#ababab"} size={22}/>
                                                        )
                                                    }
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
        paddingVertical: 24
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1d1d1d",
        marginBottom: 6
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#929292"
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8
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
        backgroundColor: "#fff"
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
    },
    rowValue: {
        fontSize: 17,
        color: "#616161",
        marginRight: 4
    }
})
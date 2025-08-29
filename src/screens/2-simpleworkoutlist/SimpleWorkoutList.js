import React from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const items = [
    {
        name: "Squat",
        image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "10",
        duration: "22",
    }, {
        name: "Pull-up",
        image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "15",
        duration: "12",
    }, {
        name: "Push-up",
        image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "5",
        duration: "12",
    }, {
        name: "Calisthenics",
        image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "12",
        duration: "33",
    }, {
        name: "Lunges",
        image: "https://images.unsplash.com/photo-1650116385006-2a82a7b9941b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "10",
        duration: "44",
    },{
        name: "Squat",
        image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "10",
        duration: "22",
    }, {
        name: "Pull-up",
        image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "15",
        duration: "12",
    }, {
        name: "Push-up",
        image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "5",
        duration: "12",
    }, {
        name: "Calisthenics",
        image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "12",
        duration: "33",
    }, {
        name: "Lunges",
        image: "https://images.unsplash.com/photo-1650116385006-2a82a7b9941b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "10",
        duration: "44",
    },{
        name: "Squat",
        image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "10",
        duration: "22",
    }, {
        name: "Pull-up",
        image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "15",
        duration: "12",
    }, {
        name: "Push-up",
        image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "5",
        duration: "12",
    }, {
        name: "Calisthenics",
        image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "12",
        duration: "33",
    }, {
        name: "Lunges",
        image: "https://images.unsplash.com/photo-1650116385006-2a82a7b9941b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "10",
        duration: "44",
    }, {
        name: "Squat",
        image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "10",
        duration: "22",
    }, {
        name: "Pull-up",
        image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "15",
        duration: "12",
    }, {
        name: "Push-up",
        image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "5",
        duration: "12",
    }, {
        name: "Calisthenics",
        image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "12",
        duration: "33",
    }, {
        name: "Lunges",
        image: "https://images.unsplash.com/photo-1650116385006-2a82a7b9941b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cal: "10",
        duration: "44",
    },
]

export default function SimpleWorkoutList() {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Day 1 💪</Text>

                {
                    items.map(({name, image, cal, duration}, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                // handle onPress
                            }}>
                            <View style={styles.card}>
                                <Image resizeMode={"cover"}
                                       style={styles.cardImage}
                                       source={{uri: image}}/>
                                <View>
                                    <Text style={styles.cardTitle}>{name}</Text>

                                    <View style={styles.cardStats}>
                                        <View style={styles.cardStatsItem}>
                                            <Feather name={"clock"} color={"#636a73"}/>
                                            <Text style={styles.cardStatsItemText}>{duration} mins </Text>
                                        </View>
                                        <View style={styles.cardStatsItem}>
                                            <Feather name={"zap"} color={"#636a73"}/>
                                            <Text style={styles.cardStatsItemText}>{cal} cals</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.cardAction}>
                                    <Feather name={"chevron-right"} color={"#9ca3af"} size={22}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1d1d1d",
        marginBottom: 12
    },
    card: {
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    cardImage: {
        width: 50,
        height: 50,
        borderRadius: 9999,
        marginRight: 12
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#000",
        marginBottom: 8
    },
    cardStats: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardStatsItem: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8
    },
    cardStatsItemText: {
        fontSize: 13,
        fontWeight: "500",
        color: "#636a73",
        marginLeft: 2
    },
    cardAction: {
        marginLeft: "auto"
    }
})
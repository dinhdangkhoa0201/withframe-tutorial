import React from "react";
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const DATA = [
    {
        title: "Currencies",
        data: [
            {
                icon: "euro-sign",
                name: "Euro",
                symbol: "EUR",
                change: 1.04,
                price: 16242,
            },
            {
                icon: "yen-sign",
                name: "Japanese Yen",
                symbol: "JPY",
                change: -7.15,
                price: 0.0072,
            },
            {
                icon: "pound-sign",
                name: "British Pound",
                symbol: "GBP",
                change: 2.88,
                price: 1.21,
            },
            {
                icon: "lira-sign",
                name: "Turkish Lira",
                symbol: "TRY",
                change: -5.25,
                price: 0.054,
            },
            {
                icon: "rupee-sign",
                name: "Indian Rupee",
                symbol: "INR",
                change: -22.17,
                price: 0.012,
            },
            {
                icon: "won-sign",
                name: "South Korean Won",
                symbol: "KRW",
                change: 11.62,
                price: 0.00075,
            },
        ]
    }, {
        title: "Cryptocurrencies",
        data: [
            {
                icon: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                change: 4.12,
                price: 30042,
            },
            {
                icon: "ethereum",
                name: "Ethereum",
                symbol: "ETH",
                change: -2.15,
                price: 2042,
            },
            {
                icon: "litecoin",
                name: "Litecoin",
                symbol: "LTC",
                change: 1.88,
                price: 142,
            },
            {
                icon: "dogecoin",
                name: "Dogecoin",
                symbol: "DOGE",
                change: -0.25,
                price: 0.054,
            },
            {
                icon: "xrp",
                name: "XRP",
                symbol: "XRP",
                change: -1.17,
                price: 0.612,
            },
            {
                icon: "tether",
                name: "Tether",
                symbol: "USDT",
                change: 0.02,
                price: 1.00,
            },
        ]
    }
];

export default function CryptoExchange() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#05121b"}}>
            <StatusBar barStyle={"light-content"}/>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Exchange 💱</Text>
                </View>

                {
                    DATA.map(({title, data}) => (
                        <View key={title}
                              style={styles.section}>
                            <TouchableOpacity onPress={() => {
                                // Handle section press if needed
                            }}>
                                <View style={styles.sectionHeader}>
                                    <Text style={styles.sectionHeaderTitle}>{title}</Text>

                                    <Feather name={"chevron-right"} color={"#fff"} size={22}/>
                                </View>
                            </TouchableOpacity>

                            <View>
                                {
                                    data.map(({icon, name, symbol, change, price}, index) => (
                                        <View key={name}
                                              style={styles.cardWrapper}>
                                            <TouchableOpacity onPress={() => {
                                                // Handle card press if needed
                                            }}>
                                                <View style={styles.card}>
                                                    <View style={styles.cardIcon}>
                                                        <FontAwesome5 name={icon} color={"#007bff"} size={20}/>
                                                    </View>

                                                    <View style={styles.cardBody}>
                                                        <Text style={styles.cardTitle}>{name}</Text>
                                                        <View style={styles.cardSubtitle}>
                                                            <Text style={styles.cardSymbol}>{symbol}</Text>
                                                            <Text style={[styles.cardChange, {color: change > 0 ? "#31d158" : "#ff463a"}]}>
                                                                {change > 0 ? "+" : "-"}
                                                                {Math.abs(change)}%
                                                            </Text>
                                                        </View>
                                                    </View>

                                                    <Text style={styles.cardPrice}>
                                                        ${price.toLocaleString("en-US")}</Text>
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
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 12,
    },
    section: {
        marginTop: 12,
        marginBottom: 18,
        paddingLeft: 24,
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 12,
    },
    sectionHeaderTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    cardWrapper: {
        borderBottomWidth: 1,
        borderColor: "#26343d"
    },
    card: {
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    cardIcon: {
        width: 46,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgb(255, 255, 255, 0.05)',
        borderRadius: 12,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "700",
    },
    cardSubtitle: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    cardBody: {
        marginLeft: 12,
        marginRight: "auto"
    },
    cardPrice: {
        color: "#0389ff",
        fontSize: 17,
        fontWeight: "600",
        marginRight: 16,
    },
    cardSymbol: {
        color: "#5b6a73",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "600"
    },
    cardChange: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 20,
        marginLeft: 12
    }
})
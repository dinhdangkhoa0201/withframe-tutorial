import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const CREDIT_CARDS = [
    {
        label: "Silver",
        price: 29
    }, {
        label: "Royal Blue",
        price: 99
    }, {
        label: "Dark Blue",
        price: 249
    }, {
        label: "Diamond",
        price: 499
    }, {
        label: "Gold",
        price: 999
    }, {
        label: "Platinum",
        price: 2499
    },
]

export default function CreditCardPicker() {
    const [value, setValue] = useState(0);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Credit Card Picker</Text>
                {
                    CREDIT_CARDS.map(({label, price}, index) => {
                        const isFirst = index === 0;
                        const isLast = index === CREDIT_CARDS.length - 1;
                        const isActive = index === value;

                        return (
                            <View key={label}
                                  style={[styles.radioWrapper,
                                      isActive && styles.radioActive,
                                      isFirst && styles.radioFirst,
                                      isLast && styles.radioLast]}>
                                <TouchableOpacity onPress={() => {
                                    //Handle onPress
                                    setValue(index);
                                }}>
                                    <View style={styles.radio}>
                                        <View style={[styles.radioInput,
                                            isActive && styles.radioInputActive]}/>
                                        <Text style={styles.radioLabel}>{label}</Text>
                                        <Text style={[styles.radioPrice,
                                            isActive && styles.radioPriceActive]}>
                                            ${price.toLocaleString(("en-US"))}/year
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
            <View style={styles.contactUs}>
                <Feather name={"info"} color={"#0069fe"} size={20}/>

                <Text style={styles.contactUsText}>
                    Doubting which credit card is the right one for you? {" "}
                    <TouchableOpacity onPress={() => {
                        // handle onPress
                    }}>
                        <Text style={{color: "#0069fe", fontWeight: "500"}}>Contact Us</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1d1d1d",
        marginBottom: 12,
    },
    radioWrapper: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#e5e7e5",
        marginTop: -2
    },
    radio: {
        position: "relative",
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    radioInput: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: "#b0b0b0",
        marginRight: 12,
        borderRadius: 9999,
    },
    radioInputActive: {
        borderWidth: 7,
        borderColor: "#0069f3"
    },
    radioLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#2d2d3a"
    },
    radioPrice: {
        fontSize: 15,
        fontWeight: "600",
        color: "#2f2f2f",
        marginLeft: "auto"
    },
    radioPriceActive: {
        color: "#3f63ff"
    },
    radioFirst: {
        marginTop: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    radioLast: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    radioActive: {
        backgroundColor: "#f1f4ff"
    },
    contactUs: {
        backgroundColor: "#f7f7f7",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 24
    },
    contactUsText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#afafaf",
        lineHeight: 22,
        marginLeft: 12
    }
})
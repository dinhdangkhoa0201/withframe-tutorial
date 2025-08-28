import React, {useState} from "react";
import {Image, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert} from "react-native";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ebecf4'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={{uri: 'https://withfra.me/android-chrome-512x512.png'}}
                           style={styles.headerImg}
                           alt={"Logo"}/>
                    <Text style={styles.title}>
                        Sign in to MyApp
                    </Text>
                    <Text style={styles.subtitle}>
                        Get access to your portfolio and more
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>
                            Email address
                        </Text>
                        <TextInput style={styles.inputControl}
                                   autoCapitalize={"none"}
                                   keyboardType={"email-address"}
                                   autoCorrect={false}
                                   placeholder={"khoa@example.com"}
                                   placeholderTextColor={"#6b7280"}
                                   value={form.email}
                                   onChangeText={email => setForm({...form, email})}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>
                            Password
                        </Text>
                        <TextInput style={styles.inputControl}
                                   secureTextEntry={true}
                                   placeholder={"********"}
                                   placeholderTextColor={"#6b7280"}
                                   value={form.password}
                                   onChangeText={password => setForm({...form, password})}
                        />
                    </View>

                    <View style={styles.formAction}>
                        <TouchableOpacity onPress={() => {
                            // handle onPress
                            Alert.alert('Successfully logged in');
                        }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Sign in
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={{
                            marginTop: "auto"
                        }}
                        onPress={() => {
                        // handle onPress
                    }}>
                        <Text style={styles.formFooter}>
                            Don't have an account?{" "}
                            <Text style={{textDecorationLine: "underline"}}>
                                Sign up
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    header: {
        marginVertical: 36
    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 36
    },
    title: {
        fontSize: 27,
        fontWeight: "700",
        color: '#1e1e1e',
        marginBottom: 6,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#929292",
        textAlign: "center"
    },
    form: {
        marginBottom: 24,
        flex: 1
    },
    input: {
        marginBottom: 16
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        marginBottom: 8
    },
    inputControl: {
        height: 44,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: "500",
        color: "#222"
    },
    formAction: {
        marginVertical: 24
    },
    button: {
        backgroundColor: "#075eec",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#075eec",
        flex: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff"
    },
    formFooter: {
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        textAlign: "center",
        letterSpacing: 0.15
    }
})
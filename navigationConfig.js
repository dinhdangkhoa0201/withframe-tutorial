export const stackNavigatorConfig = [
    {
        name: "Dashboard",
        component: require("./src/screens/0-dashboard/Dashboard").default,
        options: {
            title: "WithFrame Tutorials",
            headerShown: false
        }
    }, {
        name: "Login",
        component: require("./src/screens/1-login/Login").default,
        options: {
            title: "Login"
        }
    }, {
        name: "List",
        component: require("./src/screens/2-simpleworkoutlist/SimpleWorkoutList").default,
        options: {
            title: "Simple List"
        }
    }, {
        name: "Profile1",
        component: require("./src/screens/3-profilecard/ProfileCard1").default,
        options: {
            title: "Profile Card 1"
        }
    }, {
        name: "Profile2",
        component: require("./src/screens/3-profilecard/ProfileCard2").default,
        options: {
            title: "Profile Card 2"
        }
    }, {
        name: "Setting",
        component: require("./src/screens/4-simplesetting/SimpleSetting").default,
        options: {
            title: "Simple Setting"
        }
    }, {
        name: "CryptoExchange",
        component: require("./src/screens/5-cryptoexchange/CryptoExchange").default,
        options: {
            title: "Crypto Exchange",
            headerShown: false
        }
    }, {
        name: "CreditCardPicker",
        component: require("./src/screens/6-creditcardpicker/CreditCardPicker").default,
        options: {
            title: "Credit Card Picker"
        }
    }
]
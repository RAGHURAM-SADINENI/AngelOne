import React from 'react';
import Splash from "../../../assets/splash-icon.png";
import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => (
    <View style={styles.centerView}>
        <Image source={Splash} height="500" width="500" />
    </View>
)

const styles = StyleSheet.create({
    centerView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%'
    }
})

export default SplashScreen;
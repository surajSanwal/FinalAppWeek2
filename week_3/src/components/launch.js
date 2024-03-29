import React, { Component } from 'react';
import Carousel from 'react-native-carousel';
import CAROUSEL_IMAGE_1 from '../assets/images/carousel1.png';
import { View, Text,Platform, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
let { height, width } = Dimensions.get('window');

export default class Launch extends Component {
    constructor(props){
        super(props);
        console.log("height :",height," Width : ",width);
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", marginTop:Platform.OS=='ios'?20:0 }}>
                <Carousel width={width}
                    animate={false}
                    indicatorSize={20}
                    indicatorColor="#4A7EFF"
                    inactiveIndicatorColor="#dadada"
                    indicatorAtBottom={true}
                    indicatorOffset={0}
                >
                    <View style={styles.container}>
                        <Image source={CAROUSEL_IMAGE_1} style={styles.carouselImage} />
                    </View>
                    <View style={styles.container}>
                        <Image source={CAROUSEL_IMAGE_1} style={styles.carouselImage} />
                    </View>
                    <View style={styles.container}>
                        <Image source={CAROUSEL_IMAGE_1} style={styles.carouselImage} />
                    </View>
                </Carousel>
                <View style={{ flex: 0.1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.wrapperReg}>
                        <TouchableOpacity onPress={() => { Actions.register() }} title="Register"
                            style={styles.registerButton}
                        >
                            <Text style={styles.registerButtonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.wrapperLog}>
                        <TouchableOpacity onPress={() => { Actions.login() }} style={styles.loginButton}
                            title="Login"
                        >
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 0.1,
                    flexDirection:
                        "row",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={styles.bottomText}>
                        Dummy data
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: width,
        height:height,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop:-100,
    },
    carouselImage: {
        width: width,
       flex:1,
        resizeMode: 'contain'
    },
    wrapperReg: {
        backgroundColor: '#34A873',
        margin: 20,
        marginRight: 10,
        flex: 0.5,
        height: 40
    },
    wrapperLog: {
        borderWidth: 1,
        borderColor: "#4A7EFF",
        backgroundColor: 'transparent',
        margin: 20,
        marginLeft: 10,
        flex: 0.5,
        height: 40
    },
    registerButtonText: {
        padding: 10,
        textAlign: 'center',
        color: "#fff"
    },
    loginButtonText: {
        textAlign: 'center',
        color: "#4A7EFF",
        padding: 10,
    },
    bottomText: {
        textAlign: 'center',
        color: "#4A7EFF",
        fontSize: 16
    }

});
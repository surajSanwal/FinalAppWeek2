import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    Platform,
    ActivityIndicator
} from 'react-native';
import { Actions } from "react-native-router-flux";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myActions from '../Actions/dashAction';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Bluetooth extends Component {
    render() {
        if (this.props.loading) {
            return (
                <View style={styles.ActivityIndicatorContainer}>
                    <ActivityIndicator
                        animating={true}
                        style={{
                            height: 80,
                            marginTop: 400
                        }}
                        size='large'
                        color='#0000ff'
                    />
                </View>
            );
        } else {
            return (
                <View style={{
                    flex: 1,
                    backgroundColor: '#F5F5F5',
                    paddingTop: 20,
                    marginTop: Platform.OS == 'IOS' ? 20 : 0,
                }}
                >
                    <View style={styles.header}>
                        <Text style={{ fontSize: 28, color: '#fff', textAlign: 'center', padding: 15 }}>Bluetooth</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.welcome}>welcome</Text>
                        <Text style={styles.userName}>{this.props.userName}</Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.home()} style={styles.iconBtn}>
                                <Text style={styles.buttonText}>Home</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.camera()} style={styles.iconBtn}>
                                <Text style={styles.buttonText}>Camera</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.list()} style={styles.iconBtn} >
                                <Text style={styles.buttonText}>Users</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.details()} style={styles.iconBtn}>
                                <Text style={styles.buttonText}>Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.pop()} style={styles.iconBtn}>
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    }
}


var styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    header: {
        flex: 0.090,
        backgroundColor: '#2c3e50',
    },
    footer: {
        flex: 0.090,
        backgroundColor: '#2c3e50',
        flexDirection: "row",
    },
    container: {
        flex: 0.820,
        backgroundColor: 'white'
    },
    welcome: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold'
    },
    buttonContainerReg: {
        backgroundColor: '#c0392b',
        paddingVertical: 15
    },
    userName: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    menuIcon: {
        flex: 0.2,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    },
    iconBtn:{
        paddingVertical: 15
    }
});

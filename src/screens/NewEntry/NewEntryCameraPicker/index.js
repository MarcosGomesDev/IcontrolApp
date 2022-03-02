import React from 'react';
import {StyleSheet, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryCameraPicker = () => {

    return (
        <View>
            <TouchableOpacity  style={styles.button}>
                <Icon name="photo-camera" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>        
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.asphalt,
        width: 59,
        height: 59,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    }
});

export default NewEntryCameraPicker;
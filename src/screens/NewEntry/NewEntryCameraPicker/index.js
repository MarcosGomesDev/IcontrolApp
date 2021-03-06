import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

import NewEntryCameraPickerModal from './NewEntryCameraPickerModal';

const NewEntryCameraPicker = ({photo, onChangePhoto}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const onChangePhotoPress = (newPhoto) => {
        onChangePhoto(newPhoto);
        onClosePress();
    };

    const onDeletePicturePress = () => {
        onChangePhoto(null);
        onClosePress();
    };

    const onClosePress = () => {
        setModalVisible(false);
    };
 
    return (
        <View>
            <TouchableOpacity 
                onPress={() => setModalVisible(true)} 
                style={[styles.button, (photo) ? styles.buttonActived : '']}
            >
                <Icon name="photo-camera" size={30} color={Colors.white} />
            </TouchableOpacity>
            <NewEntryCameraPickerModal 
                photo={photo}
                isVisible={modalVisible}
                onChangePhoto={onChangePhotoPress}
                onDelete={onDeletePicturePress}
                onClose={onClosePress}
            />
        </View>        
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.asphalt,
        width: 59,
        height: 59,
        borderRadius: 150,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonActived: {
        backgroundColor: Colors.blue,
    }
});

export default NewEntryCameraPicker;
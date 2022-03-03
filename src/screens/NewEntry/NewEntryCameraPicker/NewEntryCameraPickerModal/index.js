import React, {useState} from 'react';
import { Alert, ImageBackground, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

import { RNCamera } from "react-native-camera";

import Colors from '../../../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

const NewEntryCameraPickerModal = ({
    photo, 
    isVisible, 
    onChangePhoto, 
    onDelete, 
    onClose
}) => {
    const [camera, setCamera] = useState();

    const onTakePicture = async () => {
        try {
            const {uri} = await camera.takePictureAsync({
                quality: 0.7,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true,
            });
            onChangePhoto(uri);
        } catch (error) {
            console.error("Erro ao tirar a foto", error);
            Alert.alert('Erro', 'Houve um erro ao tirar a foto.');
        }
    };

    return (
        <View>
            <Modal animationType="slide" transparent={false} visible={isVisible}>
                {photo ? (
                    <ImageBackground style={styles.imagePreview} source={{uri: photo}}>
                        <View style={styles.pictureButtonActions}>
                            <Icon  
                                name="delete"
                                size={50}
                                color={Colors.white}
                                onPress={onDelete}
                                style={styles.buttonClose}
                            />
                            <Icon 
                                name="check"
                                size={50}
                                color={Colors.white}
                                onPress={onDelete}
                                style={styles.buttonCheck}
                            />
                        </View>
                    </ImageBackground>
                ) : (
                    <RNCamera
                        ref={ref => setCamera(ref)}
                        style={styles.camera}
                        type={RNCamera.Constants.Type.back}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: "Permissão para usar a câmera",
                            message: "Precisamos da sua permissão para usar a câmera.",
                            buttonPositive: "Ok",
                            buttonNegative: "Cancelar",
                        }}
                        captureAudio={false}
                    >
                    <TouchableOpacity
                        onPress={onTakePicture}
                        style={styles.buttonTakePicture}
                    >
                        <Icon
                            name="photo-camera"
                            size={40}
                            colos={Colors.white}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                            onPress={onDelete}
                            style={styles.buttonDeletePicture}
                    >
                        <Icon 
                            name="close"
                            size={50}
                            color={Colors.white}
                        />
                    </TouchableOpacity>
                    
                </RNCamera>
                )}
                
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: '100%',
    },
    pictureButtonActions: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 16
    },
    buttonClose: {
        marginLeft: 16
    },
    buttonCheck: {
        marginRight: 16
    },
    camera: {
        flex: 1,
    },
    buttonTakePicture: {
        flex: 0,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 40,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 150,
        padding: 20
    },
    buttonDeletePicture: {
        flex: 0,
        position: 'absolute',
        top: 20,
        right: 20,
    },
})

export default NewEntryCameraPickerModal;
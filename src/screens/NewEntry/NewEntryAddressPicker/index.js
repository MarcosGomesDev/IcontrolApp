import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryAddressPicker = ({address, onChange}) => {
    const getLocation = (latitude, longitude) => {
        Geocoder.init('AIzaSyDteM2z056N7obZvbsYdXHK8N6nnQvfXPI');
    
        Geocoder.from({latitude, longitude})
            .then(json => {
                const formattedAddress = json.results[0].formatted_address;
                Alert.alert("Localização", formattedAddress, [
                    {
                        text: 'Cancelar',
                        onPress: () => {},
                        style: 'cancel',
                    },
                    {
                        text: 'Confirmar',
                        onPress: () => {onChange({
                            latitude: latitude, 
                            longitude: longitude, 
                            address: formattedAddress
                        })
                    },
                    }]
                );
            })
            .catch(error => {
                console.error("NewEntryAddressPicker :: error on get Address", error);
                Alert.alert("Houve um erro ao recuperar localização");
            })
    }
    
    const getPosition = () => {
        Geolocation.getCurrentPosition(
            pos => {
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
                
            getLocation(latitude, longitude);
            }, error => {
                console.error("NewEntryAddressPicker :: error on get Address", error);
                Alert.alert("Houve um erro ao recuperar localização");
            }
        );
    }

    const onButtonPress = () => {
        if(address) {
            Alert.alert(
                'Apagar?', `Você deseja realmente apagar este endereço?\n ${address}`, [
                {
                    text: 'Não',
                    onPress: () => console.log('Ok Pressed')
                },
                {
                    text: 'Sim',
                    onPress: onChange({latitude: null, longitude: null, address: null})
                    ,
                    style: 'cancel',
                },
            ])
        } else {
            getPosition();
        }
    }

    return (
        <View>
            <TouchableOpacity 
                style={[styles.button, address ? styles.buttonActived : '']} 
                onPress={onButtonPress}
            >
            <Icon name="person-pin" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.asphalt,
        width: 59,
        height: 59,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    buttonActived: {
        backgroundColor: Colors.blue
    }
});

export default NewEntryAddressPicker;
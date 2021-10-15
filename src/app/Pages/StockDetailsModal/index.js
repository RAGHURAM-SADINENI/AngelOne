import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StockDetailsModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={true}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                props.onClose();
            }}>
            <Text style={styles.text}>Stock Details</Text>
            <View style={styles.container}>
                {Object.keys(props.stock).map((val) =>
                    <View key={val} style={styles.columnContainer}>
                        <Text style={styles.text1}>{val}</Text>
                        <Text style={styles.text2}>:</Text>
                        <Text style={styles.text3}>{props.stock[val]}</Text>
                    </View>
                )}
            </View>
            <Button onPress={() => props.onClose()} title="Go Back" />
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 10
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    text1: {
        fontSize: 20,
        width: '40%'
    },
    text2: {
        fontSize: 20,
        width: '5%'
    },
    text3: {
        fontSize: 20,
        width: '55%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        margin: 10
    }
})

export default StockDetailsModal;
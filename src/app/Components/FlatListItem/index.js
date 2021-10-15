import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';

const FlatListItem = (props) => {
    return (
        <List.Item
            title={props.item["Security Id"]}
            description={props.item["Security Name"]}
            onPress={() => props.onClick(props.item)}
        />
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    itemText: {
        fontSize: 20,
    }
})

export default FlatListItem;
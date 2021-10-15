import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import stocks from '../../../environment/stocks';
import FlatListItem from '../../Components/FlatListItem';
import StockDetailsModal from '../StockDetailsModal';
import StocksDataTable from '../StocksDataTable';

const StocksList = () => {

    const [listView, setListView] = useState('list');
    const [stock, setStock] = useState(null);

    return (
        <React.Fragment>
            <View style={styles.toggleButtonLayout}>
                <ToggleButton.Row
                    onValueChange={v => setListView(v)}
                    value={listView}>
                    <ToggleButton icon="format-list-bulleted" value="list" />
                    <ToggleButton icon="table" value="table" />
                </ToggleButton.Row>
            </View>
            {listView == 'list' ?
                <FlatList
                    data={stocks}
                    renderItem={({item}) => <FlatListItem item={item} onClick={(item) => setStock(item)} />}
                    key={item => item["Security Code"]}

                />
                : <StocksDataTable stocks={stocks} onClick={(item) => setStock(item)}/>}
            {stock!=null && <StockDetailsModal stock={stock} onClose={()=>setStock(null)}/>}
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    toggleButtonLayout: {
        display: 'flex',
        alignItems: 'center',
        margin: 10
    }
})

export default StocksList;
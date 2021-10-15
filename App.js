/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SplashScreen from './src/app/Pages/SplashScreen';
import StocksList from './src/app/Pages/StocksList';

const App = () => {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.color}>
      {showSplash ?
        <SplashScreen />
        : <StocksList />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  color: {
    color: 'white',
    backgroundColor: 'white',
    height: '100%'
  }
})

export default App;


import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import Index from './scr/index'



const App = ({ cloudName, uploadPreset, url, response, design }) => {


  return (
    <View>
      <Index cloudName={"ogcodes"} uploadPreset={"ogcodes"} url={"https://api.cloudinary.com/v1_1/ogcodes/upload"} response={response} design={styles.uploadButton} >
        <Text style={styles.uploadButtonText}>
          Upload
          </Text>

      </Index>

    </View>


  );
};

const styles = StyleSheet.create({


  uploadButton: {
    borderRadius: 16,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
    margin: 10,
    padding: 10,
    backgroundColor: '#fe5b29',
    width: Dimensions.get('window').width - 60,
    alignItems: 'center'
  },
  uploadButtonText: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Roboto'
  }
});
export default App;
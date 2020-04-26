import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import CloudinaryImagePicker from './index'


const App = (data, err) => {
  console.log(data, "out")
  console.log(err, "out")
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <CloudinaryImagePicker onSuccess={(e) => App(e)} onError={(e) => App(e)} cloudName={"ogcodes"} uploadPreset={"ogcodes"} url={"https://api.cloudinary.com/v1_1/ogcodes/upload"} design={styles.uploadButton} >
        <Text style={styles.uploadButtonText}>
          Upload
          </Text>
      </CloudinaryImagePicker>

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
    padding: 10,
    backgroundColor: '#fe5b29',
    width: Dimensions.get('window').width - 60,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#f6f5f8',
    fontSize: 20,
    fontFamily: 'Roboto'
  }
});
export default App;


import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';



const App = () => {
  const selectPhotoTapped = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {

      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        }
        cloudinaryUpload(source)
      }
    });
  }
  const cloudinaryUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', 'ogcodes')
    data.append("cloud_name", "ogcodes")
    fetch("https://api.cloudinary.com/v1_1/ogcodes/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        setPhoto(data.secure_url)

      }).catch(err => {
        Alert.alert("An Error Occured While Uploading")
      })
  }

  return (
    <View>

      <TouchableOpacity onPress={selectPhotoTapped} style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>
          Upload
          </Text>
      </TouchableOpacity>

    </View >
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
    color: '#f6f5f8',
    fontSize: 20,
    fontFamily: 'Roboto'
  }
});
export default App;
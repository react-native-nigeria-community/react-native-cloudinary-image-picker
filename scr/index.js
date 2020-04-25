
import React from 'react'
import {
  TouchableOpacity,
  Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker';



const Index = (props) => {
  const { cloudName, uploadPreset, url, response, design } = props
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
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        }
        // console.log(source.uri)
        cloudinaryUpload(source)
      }
    });
  }
  const cloudinaryUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', uploadPreset)
    data.append("cloud_name", cloudName)
    fetch(url, {
      method: "post",
      body: data
    })
      .then(console.log(data))
      .then(res => res.json())
      .then(data => {
        console.log(data)
      }).catch(err => {
        Alert.alert("An Error Occured While Uploading")
        console.log(err)
      })
  }

  return (

    <TouchableOpacity onPress={selectPhotoTapped} style={design}>
      {props.children}
    </TouchableOpacity>


  );
};

export default Index;
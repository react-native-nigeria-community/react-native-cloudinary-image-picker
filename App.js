
import React from 'react'
import {
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const CloudinaryImagePicker = (props) => {
  const { cloudName, uploadPreset, url, design, } = props;

  const selectPhotoTapped = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        props.onError('User cancelled image picker')
      } else if (response.error) {
        props.onError('ImagePicker Error: ', response.error)
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
    data.append('upload_preset', uploadPreset)
    data.append("cloud_name", cloudName)
    fetch(url, {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        props.onSuccess(data)
      })
      .catch(err => {
        props.onError(err)
      })
  }
  return (
    <TouchableOpacity onPress={selectPhotoTapped} style={design}>
      {props.children}
    </TouchableOpacity>
  );
};
export default CloudinaryImagePicker;
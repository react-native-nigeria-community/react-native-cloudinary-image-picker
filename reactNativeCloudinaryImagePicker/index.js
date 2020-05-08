import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  Text,
  View,
} from "react-native";
import ImagePicker from 'react-native-image-picker';

function CloudinaryImagePicker(props, ref) {
  const { cloudName, uploadPreset, url, design, defaultButton, customButtom } = props;


  useImperativeHandle(ref, () => ({
    startupload() {
      selectPhotoTapped();
    },

  }));

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



  const button = props.renderButton ? props.renderButton(selectPhotoTapped) : (
    <TouchableOpacity onPress={selectPhotoTapped} style={design}>
      {props.children}
    </TouchableOpacity>
  )



  return (
    <>
      {defaultButton && button}
    </>
  )
}



export default forwardRef(CloudinaryImagePicker);


CloudinaryImagePicker.defaultProps = {

};
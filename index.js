
import React from 'react'
import {
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import ReactNativeCloudinaryImagePicker from './reactNativeCloudinaryImagePicker/index'

const CloudinaryImagePicker = () => {

  return (
    <ReactNativeCloudinaryImagePicker
      url=''
      cloudName=''
      uploadPreset=''
      design={}
      showDefaultButton={true}
      customButton={true}

    />
  );
};
export default CloudinaryImagePicker;
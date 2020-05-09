import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";

const Unsigned = (props) => {
  const {
    // keys
    CLOUDINARY_URL,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_UPLOAD_PRESET,

    // styles
    buttonText,
    buttonStyle,
    buttonTextStyle,

    // callbacks
    onUploadingStart,
    onSuccess,
    onError,

    // data props
    fileName,
  } = props;

  const selectPhotoTapped = () => {
    const options = {
      title: "Select Photo",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        onError("User cancelled image picker");
      } else if (response.error) {
        onError("ImagePicker Error: ", response.error);
      } else {
        const source = {
          uri: response.uri,
          type: response.type,
          name: `${fileName}.${response.uri.split(".")[1]}`,
        };
        cloudinaryUpload(source);
      }
    });
  };
  const cloudinaryUpload = (photo) => {
    onUploadingStart("uploading");

    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", CLOUDINARY_CLOUD_NAME);
    fetch(CLOUDINARY_URL, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        onSuccess(data);
      })
      .catch((err) => {
        onError(err);
      });
  };

  return (
    <>
      <TouchableOpacity style={buttonStyle} onPress={selectPhotoTapped}>
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Unsigned;

Unsigned.defaultProps = {
  defaultButton: true,
  onError: (e) => alert(e),
  onSuccess: (e) => alert(e),
  onUploadingStart: (e) => alert(e),
  buttonText: "Upload Image",
  buttonStyle: { backgroundColor: "red", width: 100 },
  buttonTextStyle: { color: "green" },
  fileName: "image",
};

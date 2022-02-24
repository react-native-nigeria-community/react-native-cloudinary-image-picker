import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { launchCamera, launchImageLibrary} from "react-native-image-picker";

const Unsigned = (props) => {
  const {
    // keys
    CLOUDINARY_URL,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_UPLOAD_PRESET,
    CLOUDINARY_FOLDER,
    // styles
    buttonStyle,
    // callbacks
    onUploadingStart,
    onSuccess,
    onError,
    //render
    renderComponent,
    // data props
    fileName,
  } = props;
  function handleResponse(response) { 
    console.log(response);
    if (response.assets[0]) {
      const source = {
        uri:  response.assets[0].uri ?? "",
        type: response.assets[0].type ?? "",
        name: `${fileName}.${response.assets[0].uri}`,
      };
      cloudinaryUpload(source);
    }
    
  }

  function launchCameraAction() {
    launchCamera(
      {
        saveToPhotos: true,
        mediaType: "photo",
        includeBase64: false,
      },
      (response) => {
        if (!response.didCancel) {
          handleResponse(response)

        }
      }
    );
  }
  function launchPhotoLibraryAction() {
    launchImageLibrary(
      {
        maxHeight: 700,
        maxWidth: 700,
        selectionLimit: 1,
        mediaType: "photo",
        includeBase64: false,
      },
      (response) => {
        if (!response.didCancel) {
          handleResponse(response)
        }
      }
    );
  }
  function takePhotoOptions() {
    Alert.alert(
      // This is title
      "Take or upload a selfie",
      // This is body text
      "Please make as selection",
      [
        { text: "Take Photo", onPress: () => launchCameraAction() },
        { text: "Select Photo", onPress: () => launchPhotoLibraryAction() },
        { text: "Cancel" },
      ],
      { cancelable: true }
      // on clicking out side, Alert will not dismiss
    );
  }

  const selectPhotoTapped = () => {
    takePhotoOptions()
  };
  const cloudinaryUpload = (photo) => {
    onUploadingStart("uploading");
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", CLOUDINARY_CLOUD_NAME);
    data.append("folder", CLOUDINARY_FOLDER);
    fetch(CLOUDINARY_URL, {
      method: "post",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'  
    },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        onSuccess(data);
      })
      .catch((err) => {
        console.log(err);
        onError(err);
      });
  };

  return (
    <>
      <TouchableOpacity style={buttonStyle} onPress={selectPhotoTapped}>
        {renderComponent}
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
  buttonStyle: { backgroundColor: 'transparent' },
  fileName: "image",
};

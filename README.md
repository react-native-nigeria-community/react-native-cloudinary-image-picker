![react native cloudinary image picker](assets/art.gif)

 This package helps you upload assets to cloudinary with ease.

### Installation  

Add react-native-cloudinary-image-picker to your project by running;

```
npm install react-native-cloudinary-image-picker 
```

or

```
yarn add react-native-cloudinary-image-picker
```

### **One more thing**

To frontload the installation work, let's also install and configure dependencies used by this project, being **react-native-image-picker**

run

```
yarn add react-native-image-picker

# RN >= 0.60
npx pod-install

# RN < 0.60
react-native link react-native-image-picker
```

for expo applications run;

```
expo install react-native-image-picker
```

and that's it, you're all good to go!



### Usage

```
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {UnsignedUpload} from ' react-native-cloudinary-image-picker';

function App() {
  return (
    <SafeAreaView>
      <UnsignedUpload
        CLOUDINARY_URL="<your-url-goes-here>"
        CLOUDINARY_CLOUD_NAME="<cloud-name-goes-here>"
        CLOUDINARY_UPLOAD_PRESET="<upload-preset-goes-here>"
        onUploadingStart={e => console.log(e)}
        onSuccess={e => console.log(e)}
        onError={e => console.log(e)}
      />
    </SafeAreaView>
  );
}
 
export default App;

```



## API's

#### all react-native-cloudinary-image-picker API

| Name                       | use/description                             | extra                                                        |
| -------------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| `CLOUDINARY_URL`           | CLOUDINARY Base URL to upload asset.        | `https://api.cloudinary.com/v1_1/<your-cloud-name>/image/upload` |
| `CLOUDINARY_CLOUD_NAME`    | CLOUDINARY cloud name                       | `nill`                                                       |
| `CLOUDINARY_UPLOAD_PRESET` | CLOUDINARY upload preset                    | `nill`                                                       |
| `buttonText`               | default button text                         | `Upload Image`                                               |
| `buttonStyle`              | default button style                        | `{ backgroundColor: "red", width: 100 }`                     |
| `buttonTextStyle`          | default button text style                   | `{ color: "green" }`                                         |
| `onUploadingStart`         | callback function when upload starts        | `(e) => alert(e)`                                            |
| `onError`                  | callback function when error occurs         | `(e) => alert(e)`                                            |
| `onSuccess`                | callback function when upload is successful | `(e) => alert(e)`                                            |



## Useful Resources

- [React Native : How to upload an image to Cloudinary.](https://dev.to/godswillokokon/react-native-how-to-upload-an-image-to-cloudinary-4okg)  by [Godswill okokon](https://twitter.com/Godswillokokon) 

## Contributions

What to help make this package even more awesome? [Read how to contribute](https://github.com/react-native-nigeria-community/react-native-cloudinary-image-picker/blob/master/contribution.md)

## Licensing

This project is licensed under MIT license.



###   
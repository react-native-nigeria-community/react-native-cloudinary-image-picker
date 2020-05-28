![react native cloudinary image picker](assets/art.gif)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

If you have any issue setting up image picker, please visit the [official docs](https://github.com/react-native-community/react-native-image-picker) for help

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

| Name                       | Use/Description                             | Extra                                                            | Type 
| -------------------------- | ------------------------------------------- | -----------------------------------------------------------------|-----------------------
| `CLOUDINARY_URL`           | CLOUDINARY Base URL to upload asset.        | `https://api.cloudinary.com/v1_1/<your-cloud-name>/image/upload` | String
| `CLOUDINARY_CLOUD_NAME`    | CLOUDINARY cloud name                       | `<your-cloud-name>`                                              | String
| `CLOUDINARY_UPLOAD_PRESET` | CLOUDINARY upload preset                    | `<your-upload-preset>`                                           | String
| `buttonText`               | default button text                         | `Upload Image`                                                   | String
| `buttonStyle`              | default button style                        | `{ backgroundColor: "red", width: 100 }`                         | Object
| `buttonTextStyle`          | default button text style                   | `{ color: "green" }`                                             | Object
| `onUploadingStart`         | callback function when upload starts        | `(e) => alert(e)`                                                | Function
| `onError`                  | callback function when error occurs         | `(e) => alert(e)`                                                | Function
| `onSuccess`                | callback function when upload is successful | `(e) => alert(e)`                                                | Function



## Useful Resources

- [React Native : How to upload an image to Cloudinary.](https://medium.com/react-native-nigeria/react-native-how-to-upload-an-image-to-cloudinary-da3693f0ae61)  by [Godswill Okokon](https://twitter.com/Godswillokokon) 

## Contributions

What to help make this package even more awesome? [Read how to contribute](https://github.com/react-native-nigeria-community/react-native-cloudinary-image-picker/blob/master/contribution.md)

## Licensing

This project is licensed under MIT license.



###   

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
 
   <td align="center"><a href="https://ogcodes.netlify.com/"><img src="https://avatars1.githubusercontent.com/u/34509527?v=4" width="100px;" alt=""/><br /><sub><b>OGcodes</b></sub></a><br /><a href="https://github.com/react-native-nigeria-community/react-native-cloudinary-image-picker/commits?author=godswillokokon" title="Code">💻</a></td>
  
   <td align="center"><a href="https://linksnest.com/just1and0"><img src="https://avatars3.githubusercontent.com/u/17249207?v=4" width="100px;" alt=""/><br /><sub><b>Oluwatobi Shokunbi </b></sub></a><br /><a href="https://github.com/react-native-nigeria-community/react-native-cloudinary-image-picker/commits?author=just1and0" title="Code">💻</a> <a href="https://github.com/react-native-nigeria-community/react-native-cloudinary-image-picker/commits?author=just1and0" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
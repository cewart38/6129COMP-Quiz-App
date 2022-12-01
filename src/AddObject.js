import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert, Image, Button, Platform } from 'react-native';
import React, {useEffect, useState} from 'react';
//import * as ImagePicker from 'expo-image-picker';
//import {imagePicker} from 'expo-image-picker';
//import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../FirebaseConfig';
import { TextInput } from 'react-native-gesture-handler';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

function AddObject() {

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  handlePickedImage = async (image) => {

    setUploading(true);

    if(!image.canceled) {
      const uploadUrl = await uploadImageAsync(image.uri)
      this.setState({setUploading: false})
    }
  };

  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    const fileRef = ref(getStorage(), uuid.v4());
    const result = await uploadBytes(fileRef, blob);
  
    // We're done with the blob, close and release it
    blob.close();
  
    return await getDownloadURL(fileRef);
  }
  

/*  

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri)
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
      console.log(e)
    }
    setUploading(false);
    Alert.alert(
      'photo uploaded!'
    );
    setImage(null);
  };

/*
  const uploadPhotoAsync = async uri => {
    return new Promise (async(res, rej)=> {
      const response = await fetch(uri)
      const file = await response.blob()
      let upload = firebase.storage().put(file)
      upload.on('state_changed', snapshot => {

      }, err=> {
        rej(err)
      }, async()=>{
        const url = await upload.snapshot.ref.getDownloadURL()
      })
    })
  }

  const addPhoto = async (localUri) => {
    const remoteUri = await uploadPhotoAsync(localUri)
    return new Promise((res, rej)=>{
      firebase.database().push({
        image:remoteUri
      })
      firebase.firestore().collection('addDataTest').add({
        image:remoteUri
      })
      .then(ref=>{
        res(ref)
      })
      .catch(err=>{
        rej(err)
      })
    })
  }

  const upload = () => {
    addPhoto(image).then(()=>{
      setImage(null)
    }).catch(err=>{
      alert(err.message)
    })
  }

  

  /*

  const [title, setTitle] = useState(null);
  const [picture, setPicture] = useState(null);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const uploadImage = async () => {
      // convert image to blob
      const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve (xhr.response);
        };
        xhr.onerror = function() {
          reject(new TypeError("Network Request Failed"));
        };
        xhr.responseType = "blob";
        xhr.open ("GET", image, true);
        xhr.send(null);
      });
      // set metadata of image
      const metadata = {
        contentType: 'image/jpeg'
      };
      // upload image on storage
// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, + Date.now());
const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);      
    }
    if(image!=null) {
      uploadImage();
      setImage(null);
    }
  }, [image])

  /*

  const [image, setImage] = useState(null);
  //const [uploading, setUploading] = useState(false);

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    console.log(result);

    if(!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }  

    const uploadPhoto = () => {
      firebase.shared.addPhoto(image).then(()=>{
        setImage(null)
      })
      .catch(err=>{
        alert(err.message)
      })
    }

/*    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    const source = {uri: result.uri};    // deprecated
    //const source = {uri: result.ImagePickerAsset[uri]};    // deprecated
    console.log(source)
    setImage(source);


uploadPhotoAsync = async uri => {
  const path = `photos/${Date.now()}.jpg`
  return new Promise(async (res, rej) => {
      const response = await fetch(uri)
      const file = await response.blob()
      let upload = firebase.storage().ref(path).put(file)
      upload.on('state_changed', snapshot => {

      }, err => {
          rej(err)
      }, async () => {
          const url = await upload.snapshot.ref.getDownloadURL()
          res(url)
      })
  })

}
addPhoto = async (localUri) => {
  const remoteUri = await this.uploadPhotoAsync(localUri)
  return new Promise((res,rej)=>{
      firebase.database().ref('/photos').push({
          timestamp:this.timestamp,
          image:remoteUri
      })
      this.firestore.collection('photos').add({
          timestamp:this.timestamp,
          image:remoteUri
      })
      .then(ref=>{
          res(ref)
      })
      .catch(err=>{
          rej(err)
      })
  })
}

*/






  /*

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image.uri)
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
      console.log(e)
    }
    setUploading(false);
    Alert.alert(
      'photo uploaded!'
    );
    setImage(null);
  };

  */

  return (

/*    
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
          {image && <Image source ={{uri: image.uri}} style={{width:300, height:300}}/>}
          <TouchableOpacity style={styles.uploadButton} onPress={uploadImage} >
              <Text style={styles.buttonText}>
                Upload Image
              </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
*/

/*
<SafeAreaView style={styles.container}>
<Button title="Choose Pictures" onPress={pickImage}/>
<View style={{marginHorizontal:32, marginTop:32, height:150}}>
  {image === null? <Text>No image is selected</Text>: <View><Image source={{uri:image}} style={{width:'100%', height:'100%'}}></Image>
  <Button title="Upload" onPress={uploadPhoto} />
  </View>}
</View>
</SafeAreaView>
*/

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Button title="Pick an image from camera roll" onPress={pickImage} />
{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
<Button title="submit" onPress={handlePickedImage }/>
</View>
);

};


export default AddObject

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

})